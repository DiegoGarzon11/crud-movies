const moment = require('moment');
const fs = require('fs');
const path = require('path');

/* Creating a path to the file peliculas.json */
let movies = path.resolve(__dirname, '../database/peliculas.json');
/* Reading the file and converting it to a JSON object. */
let moviesJson = JSON.parse(fs.readFileSync(movies, 'utf-8'));
const controller = {
	home: (req, res) => {
		moviesJson = JSON.parse(fs.readFileSync(movies, 'utf-8'));
		res.render('home', { movies: moviesJson });
	},

	add: (req, res) => {
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
			file: req.file.filename,
			date: moment().format('dddd-DD/MMMM/YYYY--HH:mm:ss'),
		};
		moviesJson.push(nuevaMovie);
		/* Writing the new movie to the JSON file. */

		fs.writeFileSync(movies, JSON.stringify(moviesJson, null, ' '));
		return res.redirect('/');
	},

	newMovie: (req, res) => {
		const id = req.params.id;
		const movie = moviesJson.find((movie) => movie.id == id);

		return res.render('newMovie', { movie: movie });
	},
	update: (req, res) => {
		let idMovie = req.params.id;
		let datos = req.body;

		for (let m of moviesJson) {
			if (m.id == idMovie) {
				m.titulo = datos.newTitle;
				m.genero = datos.newGenero;
				m.file = req.file.filename;
			}
		}
		fs.writeFileSync(movies, JSON.stringify(moviesJson, null, ' '));
		res.redirect('/');
	},
	delete: (req, res) => {
		let idMovie = req.params.id;

		destroy = moviesJson.filter((movie) => movie.id != idMovie);
		fs.writeFileSync(movies, JSON.stringify(destroy, null, ' '));

		res.redirect('/');
	},
};

module.exports = controller;
