const { Sequelize } = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize('fascolor_shop', 'root', 'password', {
//   host: '127.0.0.1',
//   dialect:'mysql' ,
//   logging: false
// });
const sequelize = new Sequelize(process.env.DB_DATABASE_NAME, process.env.DB_USERNAME,process.env.DB_PASSWORD , {
  host: process.env.DB_HOST,
  dialect:'mysql' ,
  logging: false
});


let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
 
module.exports = connectDB;