/* Importing the userRouter.js file. */
const route = require('./routes/userRouter');

const methodOverride = require('method-override');
const express = require('express');
const path = require('path');
const app = express();


app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));

app.use('/', route);
app.use('/create/newMovie', route);


//server on port 3000
app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
