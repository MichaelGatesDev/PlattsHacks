var express = require('express');
var router = express.Router();

var organizationModels = require("../models/organization_models");

var organization = organizationModels.orgModel;

/* GET home page. */
router.get('/api/', function(req, res) {
	organization.find({}, function (err, organizations) {
		if (err)
			res.send(err);
		res.json(organizations);
	})
});

module.exports = router;
