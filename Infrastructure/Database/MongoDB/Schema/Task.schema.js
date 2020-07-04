var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var  task = new Schema({
    title:   { type: String },
    description:   { type: String },
    deadline:   { type: Date, default:Date.now },
    owner:   { type: String },
    status:   { type: Number,default:0 }
});

mongoose.model('task', task);
module.exports = task;
