var express = require('express');

var router = express.Router();

var organizationModels = require("../models/organization_models");

var organization = organizationModels.orgModel;

router.get('/:id', function (req, res) {
	organization.find({_id : req.params.id}, function (err, org) {
		if (err)
			res.send(err);
		res.json(org)
	})
});

module.exports = router;