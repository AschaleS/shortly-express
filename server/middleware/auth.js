const models = require('../models');
const Promise = require('bluebird');
// const parsedCookie = require('./middleware');

module.exports.createSession = (req, res, next) => {
  if (!req.cookies.shortlyid) {
    models.Sessions.create()
      .then((result) => {
        var id = result.insertId;
        return models.Sessions.get({ id });
      })
      .then((sessionData) => {
        req.session = sessionData;
        res.cookie('shortlyid', req.session.hash);
      })
      .then(() => {
        var username = req.body.username;
        req.session.user = { username };
        return models.Users.get({ username });
      })
      .then((userData) => {
        if (userData && userData.id) {
          req.Session.userId = userData.id;
        }
        next();
      });
  } else {
    var hash = req.cookies.shortlyid;
    return models.Sessions.get({ hash })
      .then((sessionData) => {
        if (sessionData) {
          req.session = sessionData;
          res.cookie = ('shortlyid', req.session.hash);
          var id = sessionData.userId;
          if (id) {
            id = req.session.userId;
            return models.Users.get({ id })
              .then((userData) => {
                req.session.user = { username: userData.username };
                next();
              });
          } else {
            next();
          }

        } else {
          models.Sessions.create()
            .then((result) => {
              var id = result.insertId;
              return models.Sessions.get({ id });
            })
            .then((sessionData) => {
              req.session = sessionData;
              res.cookie('shortlyid', req.session.hash);
              next();
            });
        }
      });
  }
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

