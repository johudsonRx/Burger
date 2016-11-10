var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// router.get('/', function (req, res) {
// 	res.redirect('/cats');
// });

// router.get('/', function (req, res) {
// 	res.redirect('/');
// });



router.get('/', function (req, res) {
	burger.all(function (data) {
		var hbsObject = { burger: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});
router.post('/burgers/create', function (req, res) {
	burger.create(['name', 'devoured'], [req.body.name, req.body.devoured], function () {
		res.redirect('/');
	});
// 	console.log(req);
// 	res.redirect('/');
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/');
	});
});

module.exports = router;




