var express = require('express');
var router = express.Router();
var db = require('../database')
var userRef = db.ref('users/');
/* GET users listing. */
router.get('/', function (req, res, next) {
	const users = userRef.once('value')
		.then(data=> {
			const userArr = [];
			data = data.val();
			for (var key of Object.keys(data)) {
				let user = data[key];
				user.id = key;
				userArr.push(user);
			}
			res.send(userArr);
		});
});

/* GET users listing. */
router.post('/', function (req, res, next) {
	let data = {
		username: req.body.username,
		email: req.body.email,
	}
	const newUser = userRef.push(data);
	res.send(newUser);
});

module.exports = router;
