var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://test:test@cluster0-mlt9k.mongodb.net/plattshack?retryWrites=true");

var officerSchema = new mongoose.Schema({
	name: String,
	role: String,
});

var contactSchema = new mongoose.Schema({
	type: String,
	url: String,
	name: String,
});

var organizationSchema = new mongoose.Schema({
	email: String,
	name: String,
	type: String,
	description: String,
	officers: [officerSchema],
	contacts: [contactSchema],
});

exports.orgModel = mongoose.model('organization', organizationSchema);
exports.officerModel = mongoose.model('officer', officerSchema);
exports.contactModel = mongoose.model('contact', contactSchema);