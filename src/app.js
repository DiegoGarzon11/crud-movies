require('dotenv').config();
/* Importing the userRouter.js file. */
const route = require('./routes/productRouter');

const methodOverride = require('method-override');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(methodOverride('_method'));
/* Parsing the body of the request. */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.use('/', route);
app.use('/newMovie', route);

//server on port
app.listen(process.env.PORT, () => {
	console.log('Server is running on port ');
});
