const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const {
  isNotLoggedIn,
  isLoggedIn
} = require('./middlewares');
// const { User } = require('../models');

const router = express.Router();


/* GET home page. */
router.get('/', isNotLoggedIn, (req, res, next) => {
  res.render('login', {
    // user: req.user,
    loginError: req.flash('loginError'),
  });
});

router.post('/', isNotLoggedIn, (req, res, next) => {
  passport.authenticate('local', (authError, user, info) => { // 로컬 로그인 전략 수행.
    if (authError) {
      console.error(authError);
      return next(authError);
    }
    if (!user) {
      console.log('check');
      req.flash('loginError', info.message);  //login.pug에 error-messeage에 보내줌.
      return res.redirect('/login');
    }
    return req.login(user, (loginError) => {  //passport의 index.js에 serializeUser 호출
      if (loginError) {
        console.error(loginError);
        return next(loginError);
      }
      return res.redirect('/');
    });
  })(req, res, next); // 미들웨어 내의 미들웨어에는 (req, res, next)를 붙입니다.
});

module.exports = router;