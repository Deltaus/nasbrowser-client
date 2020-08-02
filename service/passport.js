const passport = require('passport');
const User = require('../model/User');
const config = require('../config/keys');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

const localOptions = {
    usernameField: 'username'
};
const localLogin = new LocalStrategy(localOptions, function (username, password, done) {
    User.findOne({username: username}, function (err, foundUser) {
        if(err) return done(err);
        if(!foundUser) return done(null, false);
        foundUser.comparePassword(password, function (err, isMatch) {
            if(err) return done(err);
            if(!isMatch) return done(null, false);
            return done(null, foundUser);
        });
    });
});

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    User.findById(payload.sub, function (err, foundUser) {
        if(err) return done(err, false);
        if(foundUser) {
            done(null, foundUser);
        } else {
            done(null, false);
        }
    });
});

passport.use(jwtLogin);
passport.use(localLogin);




