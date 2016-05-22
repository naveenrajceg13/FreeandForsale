var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	text : String,
    text1: String,
	done : Boolean
});