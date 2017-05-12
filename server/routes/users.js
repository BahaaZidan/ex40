const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('../models/user');
const Verify = require('../verify');
const LocalStrategy = require('passport-local').Strategy;

const local = passport.use(new LocalStrategy(users.authenticate()));
passport.serializeUser(users.serializeUser());
passport.deserializeUser(users.deserializeUser());

/* GET users listing. */
router.route('/')
.get((req, res, next) => {
  users.find({}, (err, val) => {
    if (err) throw err;
    res.json(val);
  });
})
.delete((req, res) => {
  users.remove({}, (err, val) => {
    if (err) throw err;
    res.json(val);
  });
});

router.post('/register', (req, res) => {
  users.register(new users({ username : req.body.username }), req.body.password, (err, val) => {
    if (err) return res.status(500).json({status: `Authentication Problem :: ${err}`});
    val.save((err,user) => {
      if (err) return res.status(500).json({status: `Authentication Problem :: ${err}`});
      passport.authenticate('local')(req, res, () => { 
        return res.status(200).json({status: 'Registration Successful!'});
      });
    });
  })
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }

      const token = Verify.getToken(user);
      res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      });
    });
  })(req, res, next);
});

module.exports = router;
