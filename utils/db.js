const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
	dialect: 'postgres',
	host: 'localhost',
	username: 'postgres',
	password: 'root123',
	port: 5432,
	database: 'check_in-out',
	logging: false,
});

module.exports = { db, DataTypes };
