function peliculas(sequelize, DataTypes) {
	const pelicula = sequelize.define(
		'pelicula',
		(cols = {
			id: {
				as: 'primaryKey',
				type: DataTypes.INTEGER,
				primaryKey: true,
			},
			titulo: {
				type: DataTypes.STRING(200),
				allowNull: false,
			},
			genero: {
				type: DataTypes.STRING(200),
				allowNull: false,
			},
			file: {
				type: DataTypes.STRING(200),
				allowNull: false,
			},
			date: {
				type: DataTypes.DATE,
				allowNull: false,
			},
		}),
		(config = {
			tableName: 'movies',
			timestamps: false,
			camelCase: false,
		})
	);
	return pelicula;
}
module.exports = peliculas;
