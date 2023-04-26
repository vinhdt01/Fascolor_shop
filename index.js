const express = require('express')
const path = require('path')
const bodyParser = require("express");
const cors  = require('cors')
const router = require('./src/router/index.router')
const app = express()
const connectDB = require('./src/config/connectDB')
const handlebars = require('express-handlebars');
const moment = require('moment')
const mongoose = require("mongoose");
const port = 3000
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('views'));
var now = moment()
var hbs = handlebars.create({})
hbs.handlebars.registerHelper('increasePrice', function(dateFromMongoDB) {
// Create a moment object from the date
const momentDate = moment(dateFromMongoDB);

const formattedDate = momentDate.format('YYYY-MM-DD');
return formattedDate;
})
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'resources', 'views'));
// connectDB()
router(app)
mongoose.connect(process.env.URL_MONGOOESE).then(() => {
  console.log("connect to Db successfully");
  app.listen(port, () => {
    console.log(`listening on ${port}`);
  });
});
