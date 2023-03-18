const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('freedb_fascolor', 'freedb_vinh-fascolor', 'qu#3&$n4EfwDZvs', {
  host: 'sql.freedb.tech',
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