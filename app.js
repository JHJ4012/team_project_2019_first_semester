const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');  //요청된 쿠키를 쉽게 추출할 수 있도록 해주는 미들웨어.
const logger = require('morgan'); //로그를 찍어주는 기능.
// const multer = require('multer');
const session = require('express-session');
const flash = require('connect-flash'); //login, register에서 flash 띄어주려고 하는 것. 휘발성 메세지.
const passport = require('passport'); //login 구현하려고 쓴 모듈.     // passport랑 passport-local은 따로 npm i 로 설치해야되는 것. 로그인 위해.
                                                                    // package.json에 저장되있기 떄문에 npm i 하면 다 다운 받아짐.
require('dotenv').config(); //.env 파일 사용하려고. 소스코드가 유출되었을 때 키도 같이 유출되는 것을 막기 위함.
const fs = require('fs'); //파일 관리, 처리를 위한 모듈.

const main = require('./routes/main');
const login = require('./routes/login');
const logout = require('./routes/logout');
const register = require('./routes/register');
const QnA = require('./routes/QnA');
const semester = require('./routes/semester');
const group_member = require('./routes/group_member');
const passportConfig = require('./passport');
//passport require하는 것은 passport.initialize와 passport.session 미들웨어를 사용하기 위함입니다. 
//passportConfig()는 passport의 index.js 내부 코드를 실행하기 위함입니다.(passport.use랑 passport.serialize, deserialize)
//require시 폴더 내에 index.js는 생략 가능. 여기서도 require('./passport/index.js')와 같음.

const {
  sequelize
} = require('./models');  //  ./models 의 index 안의 sequelize를 가져오기 위함.

const app = express();
sequelize.sync(); //연동
passportConfig(passport);  //passport 의 index.js의 passport가 passportConfig에 들어감.
                          //passportConfig는 passport를 어떻게 사용할지 정의해 놓은 친구.


fs.readdir('uploads', (error) => {
  if (error) {
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
  }
}); //현재 경로에 uploads라는 폴더가 있는지 확인하고 없어서 error가 뜨면 uploads라는 폴더를 만들어줌.

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'uploads'))); //  /img 경로로 들어왔을 때 uploads 폴더와 연결 시켜줌.
app.use(express.json());
app.use(express.urlencoded({
  extended: false //중첩된 객체 표현을 허용할지 말지 결정.
}));
// app.use(cookieParser("1234"));  //원래는 process.env.COOKIE_SECRET 근데 테스트용으로 하다가 1234로 한거 까먹어서 1234로 되있음.
                                //여기서 cookieParser에 넣은 값과 밑의 session의 secret의 값과 같아야 됨. 같지 않으면 홈페이지가 안 뜸.
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,  //재저장을 계속 할 건지.세션에 요청이 들어간 후에 세션에 변동이 있든 없든 무조건 저장하겠냐는 옵션.
  saveUninitialized: false, //세션이 세션 store에 저장되기 전에 uninitialized된 상태로 만들어서 저장.
  // secret: "1234", 
  secret: process.env.COOKIE_SECRET,  //비밀 키를 저장.
  cookie: { //세션과 함께 쿠키를 사용할 때 씀.
    httpOnly: true,
    secure: false,
  },
}));
app.use(flash());
app.use(passport.initialize()); //요청(req 객체)에 passport 설정을 심는다. 초기화.
app.use(passport.session());  //req.session 객체에 passport 정보를 저장.
                              //req.session 객체는 express-session에서 생성하는 것이여서 express-session 미들웨어 보다는 뒤에 연결해야함.

app.use('/', main);           //app.use는 미들웨어를 연결해주는 부분. 라우터도 미들웨어의 일종.
app.use('/login', login);
app.use('/logout', logout);
app.use('/register', register);
app.use('/semester', semester);
app.use('/QnA', QnA);
app.use('/group_member', group_member);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;