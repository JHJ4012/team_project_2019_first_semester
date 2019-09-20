const express = require('express');
const {
  isNotLoggedIn,
  isLoggedIn
} = require('./middlewares');

const router = express.Router();

router.get('/', isLoggedIn, (req, res) => { //isLoggedIn미들웨어가 next() 되면 뒤에 콜백이 불림. next() 안되면 redirect됨.
  req.logout(); //req.user 객체 삭제
  req.session.destroy();  //req.session 삭제
  res.redirect('/');
});
module.exports = router;