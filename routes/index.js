var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Snakes on a Plane Rocked' });
});

router.get('/about', function(req, res, next) {
	var self = {
		name: 'James',
		phone: '773-920-8330',
		email: 'james@codeforcoffee.org'
	};
	/* response.render() */
	// 1st: template (view)
	// 2nd: an Object with data
	res.render('about', self);
});

router.get('/faq', function(req, res, next) {
	var questions = {
		questions: ['I can haz cookie?',
		'is ben a baddie?',
		'what is Christopher?'],
		answers: ['yasssss',
		'no',
		'the best']
	};
	res.render('faq', questions);
});

router.get('/login', function(req, res, next) {
	var user = {
		// name: 'jim',
		password: 'banjo',
		hint: 'strovia'
	};
	res.render('login', user);
});

module.exports = router;
