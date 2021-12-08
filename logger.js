const logger = (req, res, next) => {
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();
	console.log(method, url, time);

	// must pass next to pass to the next middleware
	// unless the middleware is passing the res.send inside
	next();
};

module.exports = logger;
