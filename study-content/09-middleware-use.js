const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');
//  req => middleware => res
// use the middlewares once the server is loaded
app.use([logger, authorize]);
// apples to any other path that comes after /api
// app.use('/api', logger);
// api/home/about/products
app.get('/', (req, res) => {
	res.send('Home');
});
app.get('/about', (req, res) => {
	res.send('About');
});
app.get('/api/products', (req, res) => {
	res.send('Products');
});
app.get('/api/items', (req, res) => {
	// middleware authorize defines req.user and now can be used here
	console.log(req.user);
	res.send('Items');
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000....');
});
