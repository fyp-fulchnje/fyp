var Dataset = require('../models/dataset');

module.exports.create = function (req, res){
	var dataset = new Dataset(req.body);
	dataset.save(function (err, result){
		res.json(result);
	});
}

module.exports.list = function (req, res){
	Dataset.find({}, function (err, results) {
		res.json(results);
	});
}