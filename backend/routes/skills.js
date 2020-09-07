var express = require('express');
var router = express.Router();
var db = require('../database');
/* GET Topics listing. */
router.get('/', function (req, res, next) {
	const skillRef = db.ref('skills/');
	skillRef.once('value')
		.then(data=> {
			data = data.val();
			res.send(data);
		});
});

/* ADD New Topic */
router.post('/', function (req, res, next) {
	const skillRef = db.ref('skills/'+req.body.type);
	skillRef.once('value')
		.then(currentSkills=>{
			const skills = currentSkills.val();
			if(!skills.includes(req.body.skill)){
				skills.push(req.body.skill);
			}
			skillRef.set(skills);
			res.send(skills);
		});
});

router.delete('/', function (req, res, next) {
	const skillRef = db.ref('skills/'+req.body.type);
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

