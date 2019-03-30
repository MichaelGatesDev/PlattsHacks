var express = require('express');
var router = express.Router();
var organizationModels = require("../models/organization_models");

var organization = organizationModels.orgModel;

//Get create organization page
router.get("/", function (req, res) {
	res.render('create_org');
});

router.post("/", function (req, res) {
	// console.log(req.body);
	var newOrg = new organization(req.body);
	newOrg.save(function (err) {
		if (err){
			console.log("error");
			res.send(err);
		}
		console.log("i am here");
		res.redirect("/");
	})
});

module.exports = router;