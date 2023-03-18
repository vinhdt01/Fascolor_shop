const express = require('express')
const path = require('path')
const bodyParser = require("express");
const cors  = require('cors')
const router = require('./src/router/index.router')
const app = express()
const connectDB = require('./src/config/connectDB')
const handlebars = require('express-handlebars');
const port = 3000
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('views'));
app.engine(
  'hbs',
  handlebars({
      extname: '.hbs',
      helpers: {
          sum: (a, b) => a + b,
      },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
connectDB()
router(app)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
