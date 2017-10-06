db = require('../db/config');

function findAll() {
	return db.manyOrNone(`SELECT * FROM tourdates`);
}
function find6() {
	return db.manyOrNone(`SELECT * FROM tourdates ORDER BY tourdate ASC LIMIT 6`);
}
function create (tourdate, city, venue, bands, link) {
	return db.one(`INSERT INTO tourdates (tourdate, city, venue, bands, link) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [tourdate, city, venue, bands, link]);
}

function pastDates() {
	return db.manyOrNone(`SELECT * FROM tourdates WHERE tourdate<CURRENT_DATE ORDER BY tourdate DESC`);
}

function futureDates() {
	return db.manyOrNone(`SELECT * FROM tourdates WHERE tourdate>=CURRENT_DATE ORDER BY tourdate ASC`);
}

module.exports = { create, findAll, find6, pastDates, futureDates }