var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('main', {
    user: req.user, //passport에 index.js에서 보내줌. login이 완료되면.
  });
});

module.exports = router;