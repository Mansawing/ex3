var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index', function(req, res, next) {
  res.render('index', { title: 'หน้าแรก' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'เกี่ยวกับเรา' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'ติดต่อเรา' });
});

module.exports = router;
