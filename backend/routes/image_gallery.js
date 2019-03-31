var express = require('express');
var router = express.Router();
var fs = require('fs');

var organizationModels = require('../models/organization_models');

var organization = organizationModels.orgModel;

router.get("/:id", function (req, res) {
	res.render('image_gallery');
});

router.post("/:id", function (req, res) {
	organization.findOne({_id: req.params.id}, function (err, org) {
		if (err)
			res.send(err);
		
		var path = "./assets/images/" + org.name.replace(' ', '_') + "/gallery";
		fs.mkdir(path, {recursive: true}, (err) => {
			if (err)
				res.send(err);
		});
		
		var images = req.files.images;
		console.log(images.length);
		var image_count = org.image_count;
		for (var i = 0; i < images.length; i++){
			images[i].mv(path + "/" + image_count.toString() + ".jpg", function (err) {
				console.log(image_count);
				if (err)
					res.send(err)
			});
			image_count = image_count + 1;
		}
		org.image_count = image_count;
		org.save(function (err) {
			if (err)
				res.send(err)
		});
		
		res.redirect('/');
	})
});

module.exports = router;