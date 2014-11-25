var mongoose = require('mongoose');


//defining mongoose shcema
module.exports = mongoose.model('Dataset', {
	name: String
});

