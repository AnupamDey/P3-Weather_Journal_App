projectData = {};
const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));

const port = process.env.PORT || 8082;
const key = process.env.OWM_API_KEY;

const server = app.listen(port, () => {
    console.log(`Server running at localhost ${port}`)
});

app.get('/getkey', (req, res) => {
    res.send(key);
});

// GET route
app.get("/all", sendData);

function sendData(req, res) {
	res.send(projectData);
}

// POST route
app.post("/addWeatherData", addWeatherData);

function addWeatherData(req, res) {
	projectData = req.body;
	res.send(projectData);
}