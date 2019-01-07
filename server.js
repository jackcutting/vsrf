require('dotenv').config()
const express = require('express');
const path = require('path');
const db = require('./db');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from React
app.use(express.static(path.join(__dirname, 'client/build')));

// Storefinder API Endpoint
// app.get('/api/storefinder/:lat/:lng/:count', (req, res) => {
app.get('/api/storefinder', (req, res) => {
	let { lat, lng, count } = req.query;

	if (typeof lat === 'undefined' || typeof lng === 'undefined') {
		res.status(400).send({ error: 'You must supply lat and lng as query parameters.' });
		return;
	}

	lat = parseFloat(lat);
	lng = parseFloat(lng);

	if (typeof count === 'undefined') {
		count = 10;
	}

	db.query('SELECT *, ((ACOS(SIN($1 * PI() / 180) * SIN(latitude * PI() / 180) + COS($1 * PI() / 180) * COS(latitude * PI() / 180) * COS(($2 - longitude) * PI() / 180)) * 180 / PI()) * 60 * 1.1515) as distance FROM stores WHERE vegan = true ORDER BY distance ASC LIMIT $3', [lat, lng, count], (error, results) => {
		if (error) {
			throw error;
		}
		res.status(200).send(results.rows);
	});
});

// Catchall: display homepage
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
