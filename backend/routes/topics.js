var express = require('express');
var router = express.Router();
var db = require('../database');
/* GET Topics listing. */
router.get('/', function (req, res, next) {
	const topicRef = db.ref('topics/');
	topicRef.once('value')
		.then(data=> {
			const userArr = [];
			data = data.val();
			res.send(data);
		});
});

/* ADD New Topic */
router.post('/', function (req, res, next) {
	const topicRef = db.ref('topics/');
	topicRef.once('value')
		.then(currentTopics=>{
			const topics = currentTopics.val();
			if(!topics.includes(req.body.topic)){
				topics.push(req.body.topic);
			}
			topicRef.set(topics);
			res.send(topics);
		});
});

router.delete('/', function (req, res, next) {
	const topicRef = db.ref('topics/');
	topicRef.once('value')
		.then(currentTopics=>{
			let topics = currentTopics.val();
			if(topics.includes(req.body.topic)){
				topics = topics.filter(topic=> topic !== req.body.topic);
			}
			topicRef.set(topics);
			res.send(topics);
		});
});


module.exports = router;

