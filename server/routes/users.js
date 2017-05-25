const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const passport = require('passport');
const users = require('../models/user');
const Verify = require('../verify');
const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;


const local = passport.use(new LocalStrategy(users.authenticate()));
passport.serializeUser(users.serializeUser());
passport.deserializeUser(users.deserializeUser());

const twitter = passport.use(new FacebookStrategy({
  clientID: '1642906752405807',
  clientSecret: 'cd1c6a5e4a5a56b7bad13a305b40671e',
  callbackURL: 'http://ex40.herokuapp.com/api/users/facebook/cb&origin=*'
}, (token, refreshToken, profile, done) => {
  users.findOne({ facebookId: profile.id }, (err, user) => {
    if (err) {
      console.log(err); // handle errors!
    }
    if (!err && user !== null) {
      done(null, user);
    } else {
      user = new users({
        username: profile.displayName + 'withid' + profile.id
      });
      user.facebookId = profile.id;
      user.facebookToken = token;
      user.save((err) => {
        if (err) {
          console.log(err); // handle errors!
        } else {
          console.log("saving user ...");
          done(null, user);
        }
      });
    }
  });
}));

/* GET users listing. */
router.route('/')
  .get((req, res, next) => {
    users.find({}, (err, val) => {
      if (err) throw err;
      console.log('007 :)s');
      res.json(val);
    });
  })
  .delete((req, res) => {
    users.remove({}, (err, val) => {
      if (err) throw err;
      res.json(val);
    });
  });

router.get('/facebook', passport.authenticate('facebook'), (req, res) => {
  console.log('tried twitter oAuth');
  //res.json(req.user);
});

router.get('/facebook/cb', (req, res, next) => {
  passport.authenticate('facebook', (err, user, info) => {
    if (err) return res.json({ status: `Authentication Problem : ${err}` });

    if (!user) {
      return res.json({
        status: `Authentication Problem :: ${info.message}`
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
        token: token,
        user: user
      });
    });
  })(req, res, next);
});

router.post('/register', (req, res) => {
  users.register(new users({ username: req.body.username }), req.body.password, (err, val) => {
    if (err) return res.json({ status: `Authentication Problem :: ${err}` });
    val.save((err, user) => {
      if (err) return res.json({ status: `Authentication Problem :: ${err}` });
      passport.authenticate('local')(req, res, () => {
        return res.status(200).json({ status: 'Registration Successful!' });
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
      return res.json({
        status: `Authentication Problem :: ${info.message}`
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
        token: token,
        user: user
      });
    });
  })(req, res, next);
});

module.exports = router;
