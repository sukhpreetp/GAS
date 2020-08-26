var express = require('express');
var router = express.Router();
var db = require('../database');
var md5 = require('md5');
/* GET users listing. */
router.get('/', function (req, res, next) {
	const userRef = db.ref('users/');
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
	const userRef = db.ref('users/');
	let data = {
		studentId: req.body.studentId,
		email: req.body.email,
		password: md5(req.body.password),
		type: 'student',
	}
	const newUser = userRef.push(data);
	res.send(newUser.key);
});

/* GET users listing. */
router.post('/:userId/skills', function (req, res, next) {
	const userRef = db.ref('users/'+req.params.userId);
	let data = {
		skills: req.body.skills,
	}
	const newUser = userRef.update(data);
	res.send("success");
});

module.exports = router;

