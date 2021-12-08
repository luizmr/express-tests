const express = require('express');
const app = express();

//  req => middleware => res

// express supply middleware function with req, res and next
const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	console.log(method, url, time);

	// must pass next to pass to the next middleware
	// unless the middleware is passing the res.send inside
	next();
};

app.get('/', logger, (req, res) => {
	res.send('Home');
});
app.get('/about', logger, (req, res) => {
	res.send('About');
});

app.listen(5000, () => {
	console.log('Server is listening on port 5000....');
});
