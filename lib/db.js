const {Sequelize} = require('sequelize');
// You can choose to connect to sqlite here if you wish to
// Also, if you are using mysql on your local machine you need to update the credentials below
const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL || 'mysql://root:boot@localhost/cohort11a-capstone-api', {logging: false});

//Uncomment this code if you are running sqlite:
//Make sure you run this: npm install sqlite3 --save
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'path/to/database.sqlite' (this could just be called database.sqlite)
// });


module.exports = {sequelize};
