const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Option = new Schema({
    name: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default:0,
        required: true
    },
    voters: {
        type:[String],
        default:[]
    }
});

const Poll = new Schema({
    title: {
        type: String,
        required: true
    },
    options: {
        type: [Option],
        required: true
    },
    author: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    }
}, {timestamps:true});

module.exports = mongoose.model('Poll', Poll);