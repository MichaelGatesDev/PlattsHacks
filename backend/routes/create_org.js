var express = require('express');
var router = express.Router();
var organizationModels = require("../models/organization_models");
var fs = require('fs');

var organization = organizationModels.orgModel;
var officer = organizationModels.officerModel;

//Get create organization page
router.get("/", function (req, res) {
	res.render('create_org');
});

router.post("/", function (req, res) {
	var folder_name = req.body.name.replace(' ', '_');
	var path = './assets/images/' + folder_name + '/logo.jpg';
	fs.mkdir('./assets/images/' + folder_name, {recursive: true}, (err) => {
		if (err)
			res.send(err);
	});
	
	var logo = req.files.logo;
	logo.mv(path, function (err) {
		if (err)
			res.send(err);
	});
	
	fs.mkdir('./assets/images/' + folder_name + "/officers", {recursive: true}, (err) => {
		if (err)
			res.send(err);
	});
	
	var officers = [];
	if (req.body.officer1name && req.body.officer1role) {
		var newOfficer = new officer({
			name: req.body.officer1name,
			role: req.body.officer1role,
		});
		
		var path = './assets/images/' + folder_name + '/officers/officer1.jpg';
		var portrait = req.files.officer1picture;
		portrait.mv(path, function (err) {
			if (err)
				res.send(err);
		});
		
		officers.push(newOfficer);
	}
	
	if (req.body.officer2name && req.body.officer2role) {
		var newOfficer = new officer({
			name: req.body.officer2name,
			role: req.body.officer2role,
		});
		
		var path = './assets/images/' + folder_name + '/officers/officer2.jpg';
		var portrait = req.files.officer1picture;
		portrait.mv(path, function (err) {
			if (err)
				res.send(err);
		});
		
		officers.push(newOfficer)
	}
	
	if (req.body.officer3name && req.body.officer3role) {
		var newOfficer = new officer({
			name: req.body.officer3name,
			role: req.body.officer3role,
		});
		
		var path = './assets/images/' + folder_name + '/officers/officer3.jpg';
		var portrait = req.files.officer1picture;
		portrait.mv(path, function (err) {
			if (err)
				res.send(err);
		});
		
		officers.push(newOfficer)
	}
	
	if (req.body.officer4name && req.body.officer4role) {
		var newOfficer = new officer({
			name: req.body.officer4name,
			role: req.body.officer4role,
		});
		
		var path = './assets/images/' + folder_name + '/officers/officer4.jpg';
		var portrait = req.files.officer1picture;
		portrait.mv(path, function (err) {
			if (err)
				res.send(err);
		});
		
		officers.push(newOfficer)
	}
	
	var newOrg = new organization({
		email: req.body.email,
		name: req.body.name,
		description: req.body.description,
		officers: officers,
	});
	newOrg.save(function (err) {
		if (err){
			res.send(err);
		}
		res.redirect("/");
	})
});

module.exports = router;