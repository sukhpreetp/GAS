var express = require('express');
var router = express.Router();
var db = require('../database');
/* GET Topics listing. */
router.get('/', function (req, res, next) {
	const topicRef = db.ref('topics/');
	topicRef.once('value')
		.then(data=> {
			data = data.val();
			res.send(data);
		});
});

/* ADD New Topic */
router.post('/', function (req, res, next) {
	const topicRef = db.ref('topics/');
	const topic = {
		backend : {
			"minNumber" : req.body.backend.minNumber,
			"skills" : req.body.backend.skills,
		},
		database : {
			"minNumber" : req.body.database.minNumber,
			"skills" : req.body.database.skills,
		},
		frontend : {
			"minNumber" : req.body.frontend.minNumber,
			"skills" : req.body.frontend.skills,
		},
		maxNumber : req.body.maxNumber,
		name : req.body.name
	};
	const newTopic = topicRef.push(topic);
	res.send(newTopic.key);
});

router.delete('/', function (req, res, next) {
	const skillRef = db.ref('skills/');
	skillRef.once('value')
		.then(currentSkills=>{
			let skills = currentSkills.val();
			if(skills.includes(req.body.skill)){
				skills = skills.filter(topic=> topic !== req.body.skill);
			}
			skillRef.set(skills);
			res.send(skills);
		});
});


module.exports = router;

