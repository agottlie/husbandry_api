const router = require('express').Router();
const Dates = require('../models/dates');

router.get('/add', (req, res) => {
	res.render('add');
})

router.get('/get6', (req,res) => {
	Dates
		.find6()
		.then((data) => {
			res.json(data)
		})
		.catch(err => console.log('CONTROLLER GET ERROR: ', err));
})

router.get('/past', (req,res) => {
	Dates
		.pastDates()
		.then((data) => {
			res.json(data)
		})
		.catch(err => console.log('CONTROLLER GET ERROR: ', err));
})

router.get('/future', (req, res) => {
	Dates
		.futureDates()
		.then((data) => {
			res.json(data)
		})
		.catch(err => console.log('CONTROLLER GET ERROR: ', err));
})

router.get('/', (req,res) => {
	Dates
		.findAll()
		.then((data) => {
			res.json(data)
		})
		.catch(err => console.log('CONTROLLER GET ERROR: ', err));
})

router.post('/', (req,res) => {
	const {tourdate, city, venue, bands, link} = req.body;
	console.log(tourdate);
	Dates
		.create(tourdate, city, venue, bands, link)
		.then((data) => {
			res.json(data)
		})
		.catch(err => console.log('CONTROLLER POST ERROR: ', err));
})


module.exports = router;