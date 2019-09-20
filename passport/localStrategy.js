const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt'); //암호화된 password를 복호화하기 위함.

const {
  User
} = require('../models');

module.exports = (passport) => {
  passport.use(new LocalStrategy({  
    usernameField: 'u_id',      //login.pug에 name이 u_id인 input 태그의 값 불러와짐.
    passwordField: 'password',  //login.pug에 name이 u_password인 input 태그의 값 불러와짐.
  }, async (u_id, password, done) => {
    try {
      const exUser = await User.find({
        where: {
          u_id
        }
      });
      if (exUser) {
        const result = await bcrypt.compare(password, exUser.u_passwd); //첫 번째 매개변수를 암호화 해 두번 째 매개변수와 비교. 두번 째 매개변수는 암호화되어 있음. 같으면 true, 같지 않으면 false.
        if (result) {
          done(null, exUser); //done을 하면 routes에 있는 login.js에 passport.authenticate 안에 있는 콜백함수로 감.
        } else {
          done(null, false, {
            message: '비밀번호가 일치하지 않습니다.' //info에 들어감.
          });
        }
      } else {
        done(null, false, {
          message: '가입되지 않은 회원입니다.'  //info에 들어감.
        });
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }));
};