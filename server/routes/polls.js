const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const polls = require('../models/poll');
const Verify = require('../verify');

const pollsRouter = express.Router();
pollsRouter.use(bodyParser.json());

pollsRouter.route('/')
.get((req, res) => {
    polls.find({})
        .populate('author')
        .exec((err, val) => {
            if (err) throw err;
            res.json(val);
    });
})
.post(Verify.verifyOrdinaryUser, (req, res) => {
    req.body.author = req.decoded._doc._id;
    polls.create(req.body, (err, val) => {
        if (err) throw err;
        res.json(val);
    });
})
.delete(Verify.verifyOrdinaryUser, (req, res) => {
    polls.remove({}, (err, val) => {
        if (err) throw err;
        res.json(val);
    });
});

pollsRouter.route('/:pollId')
.get((req, res) => {
    polls.findById(req.params.pollId)
        .populate('author')
        .exec((err, val) => {
            if (err) throw err;
            res.json(val);
    });
})
.put(Verify.verifyOrdinaryUser, (req, res, next) => {
    polls.findById(req.params.pollId, (err, val) => {
        if (err) throw err;
        if (req.decoded._doc._id != val.author) {
            let error = new Error('You are not the owner of this poll');
            error.status = 403;
            return next(error);
        } else {
            val.options = req.body.options || val.options;
            val.title = req.body.title || val.title;
            val.save((err, val) => {
                if (err) throw err;
                console.log('Updated Poll!');
                res.json(val);
            });
        }
    });
})
.delete(Verify.verifyOrdinaryUser, (req, res, next) => {
    polls.findById(req.params.pollId, (err, val) => {
        if (err) throw err;
        if (req.decoded._doc._id != val.author) {
            let error = new Error('You are not the owner of this poll');
            error.status = 403;
            return next(error);
        } else {
            val.remove();
            val.save((err, val) => {
                if (err) throw err;
                res.json(val);
            });
        }
    });
});

pollsRouter.route('/byauthor/:authorId')
.get(Verify.verifyOrdinaryUser, (req, res, next) => {
    polls.find({author: req.params.author}, (err, val) => {
        if (err) throw err;
        if (req.decoded._doc._id != val.author) {
            let error = new Error('You are not the owner of these polls');
            error.status = 403;
            return next(error);
        } else {
            res.json(val);
        }
    });
});

//store the pollId and the optionId into 
pollsRouter.route('/:pollId/vote/:optionId')
.post((req, res) => {
    console.log( req.body.ippp || req.headers['x-forwarded-for'] || req.connection.remoteAddress);
    polls.findById(req.params.pollId, (err, val) => {
        if (err) throw err;
        const voterIp = req.body.ippp || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        const votedIndex = isVoted(val.options);
        const optionIndex = val.options.findIndex(x => { return x._id == req.params.optionId; });
        
        function isVoted(arr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].voters.indexOf(voterIp) != -1) {
                    return i;
                }
            }
            console.log('else ezay ya roo7 oomak !!!');
            return -1;
        }

        if (votedIndex != -1) {
            console.log('exists');
            if (val.options[votedIndex]._id == val.options[optionIndex]._id) {
                console.log('same');
                //maybe here's the problem
                val.options[optionIndex].voters = val.options[optionIndex].voters.filter(x => { return x != voterIp });
                val.options[optionIndex].votes--;
                val.save((err, resp) => {
                    if (err) throw err;
                    res.json(resp);
                });
            } else {
                console.log('different');
                val.options[votedIndex].voters = val.options[votedIndex].voters.filter(x => { return x != voterIp });
                val.options[votedIndex].votes--;
                val.options[optionIndex].voters.push(voterIp);
                val.options[optionIndex].votes++;
                val.save((err, resp) => {
                    if (err) throw err;
                    res.json(resp);
                });
            }
        } else {
            console.log("doesn't exist");
            val.options[optionIndex].votes++;
            val.options[optionIndex].voters.push(voterIp);
            val.save((err, resp) => {
                if (err) throw err;
                res.json(resp);
            });
        }
    });
});


/*

{
    "title":"el 7onklolo ?",
    "options":[{"name" : "7e70"}, {"name" : "fgdfsgsdg54"}]
}

{
    "ippp":"el 7onklolo ?"
}
*/

module.exports = pollsRouter;