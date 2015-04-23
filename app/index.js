var express = require('express'),
    path    = require('path'),
    router  = express.Router();

//router.get('/', function(req, res, next){
//    res.sendFile(path.join(__dirname, '../public/index.html'));
//    console.log('Home page');
//});
router.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, '../public/portfolio.html'));
    console.log('Portfolio page');
});

module.exports = router;