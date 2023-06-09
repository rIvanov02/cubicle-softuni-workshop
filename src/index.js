const express = require('express');
const app = express();


const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')

expressConfig(app)
handlebarsConfig(app)

const port = 5000;

// Routes

app.get('/', (req, res) => { 
    res.render("index")
})

app.listen(port, () => { console.log("Server listening on port : " + port)});