const authorize = (req, res, next) => {
	const { user } = req.query;
	if (user === 'luiz') {
		// now every route that uses this middleware
		// wil have access to req.user
		req.user = {
			name: 'luiz',
			id: '1',
		};
		next();
	} else {
		res.status(401).send('user not authorized');
	}
};

module.exports = authorize;
