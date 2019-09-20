var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt'); //암호화를 위한 모듈.
const {
  isLoggedIn,
  isNotLoggedIn
} = require('./middlewares'); //middlewares는 로그인 한지 안 한지 확인하기 위함.
var {
  User
} = require('../models');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('register', {
    loginError: req.flash('loginError'),  //회원가입에 실패했을 때 flash 띄어주기 위함.
  });
});

router.post('/', isNotLoggedIn, async (req, res, next) => { // async-await문.
  const {
    password,
    u_id,
    u_nickName,
  } = req.body;
  try {
    const exUser = await User.find({  //자바 스크립트는 비동기라서 동시에 작업해버림.
                                      //순서대로 실행하기 위해 함. 
      where: {
        u_id
      }
    });
    const exNick = await User.find({
      where: {
        u_nickName
      }
    });


    if (exUser) {
      req.flash('loginError', '이미 존재하는 아이디 입니다');
      return res.redirect('/register');
    } else if (exNick) {
      req.flash('loginError', '이미 존재하는 닉네임 입니다');
      return res.redirect('/register')
    }
    const hash = await bcrypt.hash(password, 12); //암호 처리하는데 시간이 많이 걸려서 이것도 await 달아줌. 
                                                  //bcrypt.hash하면 password를 hash화 해줌. password를 12번 섞겠다.
    await User.create({
      u_id,
      u_passwd: hash,
      u_nickName,
    });

    return res.redirect('/');
  } catch (error) {
    res.redirect('/register');
    return next(error);
  }
});

module.exports = router;