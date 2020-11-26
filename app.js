const express = require('express');
const app = express();
app.listen(8080, ()=> console.log('listening at 8080'));
app.use(express.static('public'));
var csv2geojson = require('csv2geojson');