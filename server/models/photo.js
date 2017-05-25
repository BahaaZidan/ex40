const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Photo = new Schema({
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    likers:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"User",
        default: []
    },
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
}, {timestamps:true});

module.exports = mongoose.model('Photo', Photo);