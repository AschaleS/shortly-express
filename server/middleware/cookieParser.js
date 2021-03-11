const parseCookies = (req, res, next) => {
  var cookiesObj = {};

  if (req.headers.cookie) {
    var array = req.headers.cookie.split('; ');
    array.forEach((cookie) => {
      var parsedCookie = cookie.split('=');
      cookiesObj[parsedCookie[0]] = parsedCookie[1];
    });
  }

  req.cookies = cookiesObj;
  next();
  // // console.log(req.headers);
  // if (!req.headers.cookie) {
  //   req.cookies = {};
  // } else {
  //   var cookieArray = req.headers.cookie.split(';');
  //   var paresdCookies = cookieArray.reduce((result, cookie) => {
  //     var cookie = cookie.split('=');
  //     // console.log('inside of parsedcookies' + cookie);

  //     result[cookie[0]] = cookie[1];
  //     return result;
  //   }, {});
  //   req.cookies = paresdCookies;
  // }

  // console.log(req.cookies);
  // next();
};

module.exports = parseCookies;