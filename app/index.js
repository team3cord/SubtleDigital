var express = require('express'),
    path    = require('path'),
    router  = express.Router();

router.get('/', function(req, res, next){
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;