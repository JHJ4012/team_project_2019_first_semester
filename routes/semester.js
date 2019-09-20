var express = require('express');
var router = express.Router();
const path = require('path');

const {
  Post,
  User
} = require('../models');

var multer = require('multer'); //multer는 인코딩 타입이 multipart/form-data가 아니면 저장 안 함.
var _storage = multer.diskStorage({ //storage에는 파일 저장방식, 경로, 파일명 등 설정할 수 있음
                                    //diskStorage를 사용해 이미지가 서버 디스크에 저장되도록 함.
  destination: (req, file, cb) => { //destination : 저장경로 , cb는 callback 줄임말.
    cb(null, 'uploads/'); //저장될 폴더이름
  },
  filename(req, file, cb) { // 저장할 때의 파일이름 
    let extension = path.extname(file.originalname);  //extension은 확장자명.
    let basename = path.basename(file.originalname, extension); //확장자 제외한 파일 이름.
    cb(null, basename + "-" + Date.now() + extension);  //똑같은 이름이라도 시간으로 구분하기 위함.
  } //null은 에러.
})
var upload = multer({
  storage: _storage
})

/* GET home page. */
router.get('/', (req, res, next) => {

  Post.findAll({})
    .then((posts) => {
      console.log(posts);
      res.render('semester', { //render 방식으로 pug에 객체 보냄
        gallery: posts,
        user: req.user,
      });
    })
    .catch((error) => {
      console.error(error);
      next(error);
    })
});

router.get('/:id', function (req, res, next) {
  Post.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((lcl_infos) => {
      console.log(lcl_infos);
      res.json(lcl_infos);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
})

router.delete('/:id', (req, res, next) => {
  Post.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((result) => {
      console.log(result);
      res.json(result);
    }).catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post('/img', upload.single('userfile'), function (req, res, next) {
  //upload는 미드웨어를 만드는 메서드를 가지고 있다. upload.single('~~')의 리턴값이 미들웨어, 위에 설정한 대로 uploads 폴더에도 저장됨
  //upload.single은 파일 하나만 올리겠다는 것.
  //upload.single로 인해 가져온 값을 req.file에 넣는다. 나머지 정보는 req.body에 넣음.
  // 'userfile' pug파일에 보면 인풋에 이름이랑 맞춰야함
  try {
    Post.create({ // models에 insert 
      img: `/img/${req.file.filename}`, // 거기에 img 속성에 이값 넣음
      content: req.body.content
    });
  } catch (err) {
    console.log(err);
    res.redirect('/semester');
  }

  res.redirect('/semester'); // 이미지넣고 페이지 다시불러옴으로써 새로고침 안하고 이미지 뜸 
});

module.exports = router;