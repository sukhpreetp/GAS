var express = require('express');
var router = express.Router();
var db = require('../database');
var md5 = require('md5');
/* GET users listing. */
router.get('/', function (req, res, next) {
	const userRef = db.ref('users/');
	const users = userRef.once('value')
		.then(data => {
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
	res.send({result: "success"});
});

/* GET users listing. */
router.post('/:userId/skills', function (req, res, next) {
	const userRef = db.ref('users/' + req.params.userId);
	let data = {
		skills: req.body.skills,
	}
	const newUser = userRef.update(data);
	res.send("success");
});


/* Add users topic. */
router.post('/:userId/topics', function (req, res, next) {
	const userRef = db.ref('users/' + req.params.userId);
	userRef.once('value')
		.then(data => {
			const currentUser = data.val();
			currentUser.topics = currentUser.topics ? currentUser.topics : [];
			let exists = false;
			for (let i = 0; i < currentUser.topics.length; i++) {
				if (currentUser.topics[i].topicId === req.body.topic.id) {
					exists = true;
				}
			}
			if (!exists) {
				currentUser.topics.push({
					topicId: req.body.topic.id,
					topicName: req.body.topic.name,
					role: req.body.role,
				});
				const topicRef = db.ref('topics/' + req.body.topic.id + '/candidates');
				topicRef.once('value').then(data => {
					const candidates = data.val() ? data.val() : [];
					candidates.push({
						user: {
							id: req.params.userId,
							email: currentUser.email,
						},
						role: req.body.role,
						grouped: false,
					});
					userRef.set(currentUser).then(()=>{
						topicRef.set(candidates).then(()=>{
							res.send({result: "success"});
						});
					});
				});
			} else {
				res.send({result: "failed", msg: "Duplicated topic in user."});
			}
		});
});
module.exports = router;

