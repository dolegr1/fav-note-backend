// const mongoose = require('mongoose');
// const passport = require('passport');
// require('../models/User');

// const User = mongoose.model('users');

import passport from 'passport';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const user = {
  userLogin: (req, res, next) => {
    passport.authenticate('local', { session: false }, function (err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.sendStatus(403); }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: 1200 });
      return res.send({ token, "username": user.username });

    })(req, res, next);
  },
  userLogout: (req, res) => {
    req.logout();
    res.sendStatus(200);
  },
  userRegister: (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);
    User.register(new User({ username }), password, function (err, user) {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      } else {
        // passport.authenticate('local')(req, res, function() {
        res.sendStatus(201);
        // });
      }
    });
  },
};

module.exports = user;