var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var  profile = new Schema({
    name:   { type: String },
    phone_number:   { type: Number },
    status:   { type: String }
});

mongoose.model('profile', profile);
module.exports = profile;
