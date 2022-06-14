const moment = require('moment');
const fs = require('fs');
const path = require('path');

/* Creating a path to the file peliculas.json */
const movies = path.resolve(__dirname, '../database/peliculas.json');
/* Reading the file and converting it to a JSON object. */
const moviesJson = JSON.parse(fs.readFileSync(movies, 'utf-8'));
const controller = {
	home: (req, res) => {
		res.render('home', { movies: moviesJson });
	},
	

	create: (req, res) => {
		console.log(req.file)
		const generarID = () => {
			/* Creating a new ID for the new movie.
			=== if(moviesJson.length === 0) {
					return 1;
				} else {
					return moviesJson[moviesJson.length - 1].id + 1;
				}
			}
				*/
			let id = moviesJson.length;
			id++;
			return id;
		};


		
		
		const nuevaMovie = {
			id: generarID(),
			titulo: req.body.name,
			genero: req.body.generos,
			file:req.file.filename,
			date: moment().format('dddd-DD/MMMM/YYYY--HH:mm:ss'),
		};
		moviesJson.push(nuevaMovie);
		/* Writing the new movie to the JSON file. */

		fs.writeFileSync(movies, JSON.stringify(moviesJson, null, ' '));
		return res.redirect('/');
	},
	newMovie: (req, res) => {
		
		res.render('newMovie');
	}
	
};

module.exports = controller;
