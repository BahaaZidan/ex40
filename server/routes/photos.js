const express = require('express');
const bodyParser = require('body-parser');
const multer  = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({ storage: storage })

const photo = require('../models/photo');
const verify = require('../verify');

const photosRouter = express.Router();

photosRouter.use(bodyParser.json());
photosRouter.use(bodyParser.urlencoded({ extended: false }));

photosRouter.route('/')
.get((req,res,next) => {
  photo.find({},(err, resp) => {
    if (err) throw err;
    res.json(resp);
  })
})

.post(verify.verifyOrdinaryUser/*,upload.single('photo')*/,(req,res,next) => {
    let request = {
      "description":req.body.description,
      "author":req.decoded._doc._id,
      "url":req.body.url
      /*"url":req.file.path.substring(7)*/
    };
    console.log(request);
    console.log(req.file);
    console.log(req.body);

    photo.create(request,(err,resp) => {
      if (err) throw err;
      //res.end();
      res.json(resp);
    });
})
.delete(verify.verifyOrdinaryUser,(req,res,next) => {
  photo.remove({},(err,resp) => {
    if (err) throw err;
    res.json(resp);
  });
});

photosRouter.route('/byauthor/:username')
.get((req, res, next) => {
  /*
    photo.find({author: req.params.userId}, (err, val) => {
        if (err) return res.json({status: `error retrieving photos :: ${err}`});
        res.json(val);
    });*/
    photo.find({})
      .populate('author')
      .exec((err, val) => {
        if (err) throw err;
        let filtered = val.filter(x => x.author.username == req.params.username);
        res.json(filtered);
      });
});

photosRouter.route('/:photoId')
.get((req,res,next) => {
  photo.findById(req.params.photoId)
    .populate('author')
    .exec((err, val) => {
      if (err) throw err;
      res.json(val);
    });
})

.put(verify.verifyOrdinaryUser, function(req,res,next){
  console.log(req.params.photoId);
  console.log(req.body);
  photo.findById(req.params.photoId, (err, resp) => {
    if (err) throw err;
    if (req.decoded._doc._id == resp.author) {
      resp.description = req.body.description || resp.description;
      resp.save((err, resp) => {
        if (err) throw err;
        res.json(resp);
      });
    } else {
      res.json({status: `Your not the owner of this photo`});
    }
  });
})
.delete(verify.verifyOrdinaryUser,function(req,res,next){
  photo.findById(req.params.photoId, function(err,resp){
    if (err) throw err;
    if (req.decoded._doc._id != resp.author) {
      res.json({status: `Your not the owner of this photo`});
    } else {
      resp.remove();
      resp.save((err, val) => {
        if (err) throw err;
        res.json(resp);
      });
    }
    
  });
});

photosRouter.route('/:photoId/like')
.post(verify.verifyOrdinaryUser, (req, res, next) => {
  photo.findById(req.params.photoId, (err, resp) => {
    if (err) throw err;
    if (req.decoded._doc._id != resp.author) {
      if (resp.likers.indexOf(req.decoded._doc._id) != -1) {
        resp.likers = resp.likers.filter(x => {return x != req.decoded._doc._id});
        resp.save((err, val) => {
          if (err) throw err;
          console.log('Updated Photo!');
          res.json(val);
        });
      } else {
        resp.likers.push(req.decoded._doc._id);
        resp.save((err, val) => {
          if (err) throw err;
          console.log('Updated Photo!');
          res.json(val);
        });
      }
    } else {
      res.json({status: `You Can't Like/Dislike Your Own Photo`});
    }
    
  });
});


module.exports = photosRouter;

/*
photosRouter.route('/search/:searchInp')
.get(verify.verifyUser,function(req,res,next){
  var searchInput = req.params.searchInp.split(',');
  console.log(searchInput);
  photo.find({$or : [{title:searchInput[0]}, {tags : {$all : searchInput}}]},function(err,vol){
    if (err) throw err;
    console.log("found : ");
    console.log(vol);
    console.log("input : ");
    console.log(req.params.searchInp);
    res.json(vol);
  });
});
*/