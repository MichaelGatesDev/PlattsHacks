var express = require('express');
var router = express.Router();
var organizationModels = require("../models/organization_models");
var fs = require('fs');

var organization = organizationModels.orgModel;
var officer = organizationModels.officerModel;
var contact = organizationModels.contactModel;

//Get create organization page
router.get("/", function (req, res) {
	res.render('create_org');
});

router.post("/", function (req, res) {
	var folder_name = req.body.name.replace(/\s/g, '_');
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
	}else{
		var newOfficer = new officer();
		officers.push(newOfficer);
	}
	if (req.body.officer2name && req.body.officer2role) {
		var newOfficer = new officer({
			name: req.body.officer2name,
			role: req.body.officer2role,
		});
		
		var path = './assets/images/' + folder_name + '/officers/officer2.jpg';
		var portrait = req.files.officer2picture;
		portrait.mv(path, function (err) {
			if (err)
				res.send(err);
		});
		
		officers.push(newOfficer)
	}else{
		var newOfficer = new officer();
		officers.push(newOfficer);
	}
	if (req.body.officer3name && req.body.officer3role) {
		var newOfficer = new officer({
			name: req.body.officer3name,
			role: req.body.officer3role,
		});
		
		var path = './assets/images/' + folder_name + '/officers/officer3.jpg';
		var portrait = req.files.officer3picture;
		portrait.mv(path, function (err) {
			if (err)
				res.send(err);
		});
		
		officers.push(newOfficer)
	}else{
		var newOfficer = new officer();
		officers.push(newOfficer);
	}
	if (req.body.officer4name && req.body.officer4role) {
		var newOfficer = new officer({
			name: req.body.officer4name,
			role: req.body.officer4role,
		});
		
		var path = './assets/images/' + folder_name + '/officers/officer4.jpg';
		var portrait = req.files.officer4picture;
		portrait.mv(path, function (err) {
			if (err)
				res.send(err);
		});
		
		officers.push(newOfficer)
	}else{
		var newOfficer = new officer();
		officers.push(newOfficer);
	}
	
	var contacts = [];
	if (req.body.contact1type && req.body.contact1url && req.body.contact1name) {
		var newContact = new contact({
			type: req.body.contact1type,
			url: req.body.contact1url,
			name: req.body.contact1name,
		});
		
		contacts.push(newContact);
	}else{
		var newContact = new contact();
		contacts.push(newContact);
	}
	if (req.body.contact2type && req.body.contact2url && req.body.contact2name) {
		var newContact = new contact({
			type: req.body.contact2type,
			url: req.body.contact2url,
			name: req.body.contact2name,
		});
		
		contacts.push(newContact);
	}else{
		var newContact = new contact();
		contacts.push(newContact);
	}
	if (req.body.contact3type && req.body.contact3url && req.body.contact3name) {
		var newContact = new contact({
			type: req.body.contact3type,
			url: req.body.contact3url,
			name: req.body.contact3name,
		});
		
		contacts.push(newContact);
	}else{
		var newContact = new contact();
		contacts.push(newContact);
	}
	
	var newOrg = new organization({
		image_count: 0,
		name: req.body.name,
		description: req.body.description,
		type: req.body.type,
		officers: officers,
		contacts: contacts,
	});
	newOrg.save(function (err) {
		if (err){
			res.send(err);
		}
		res.redirect("/api/");
	});
});

module.exports = router;