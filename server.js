var express       = require('express'),
    bodyParser    = require('body-parser'),
    app = express();

app.use(bodyParser.json());
app.use(require('./app/index.js'));
app.use(express.static('./public'));

app.listen(3000);
console.log('Listening on port 3000.');

module.exports = app;
