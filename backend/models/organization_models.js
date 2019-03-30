var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://test:test@cluster0-mlt9k.mongodb.net/plattshack?retryWrites=true");

var organizationSchema = new mongoose.Schema({
	name: String,
	type: String,
	description: String,
});

exports.orgModel = mongoose.model('organization', organizationSchema);