const express = require('express');
const app = express();


const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const homeController = require('./controllers/homeController')


expressConfig(app)
handlebarsConfig(app)

const port = 5000;

app.use(homeController)


app.listen(port, () => { console.log("Server listening on port : " + port)});