const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mustacheExpress = require('mustache-express');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'));

app.use('/dates', require('./controllers/datesController'));


app.listen(PORT, () => console.log('Server listening on port', PORT));