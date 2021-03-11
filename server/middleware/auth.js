const models = require('../models');
const Promise = require('bluebird');
const parsedCookie = require('./middleware');

module.exports.createSession = (req, res, next) => {
  // if no cookies => create hash => create session => create cookie => send cookie in response
  // if Cookie is present => get hash => check if hash is the same as stored hash
  // if cookie is not valid, make cookie/session/send cookie


  if (!req.cookies) {
    models.Sessions.create();
    // .then((sessiondata) => {
    //   req.session = sessiondata;
    //   res.cookie = ('shortlyid=' + req.session.hash);
    //   // res.cookie(name, value [,options]);
    //   })
    // .then( ()=> {

    // })



  } else {

  }
  var cookie = parsedCookie;
  var session = {}; /// index username hash





};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

