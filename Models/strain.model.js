const mongoose = require('mongoose'),
Schema = mongoose.Schema;

let StrainSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	level: {
		type: Number,
		required: true
	}
})


module.exports = mongoose.model('Strain', StrainSchema);