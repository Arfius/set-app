var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var  event = new Schema({
    title:   { type: String },
    description:{ type: String },
    deadline:{ type: Date , default:Date.now },
    tasks:[{ type: String }],
    owner:{ type: String },
    status:{ type: Number },
    partecipants:[{ type: String }],
    tasks:[{ type: String }]

   

});

mongoose.model('event', event);
module.exports = event;
