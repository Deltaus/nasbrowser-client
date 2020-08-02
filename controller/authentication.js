const jwt = require('jwt-simple');
const config = require('../config/keys');
const User = require('../model/User');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signUp = function (req, res, next) {
    console.log('DEBUG: Received request....');

    const username = req.body.username;
    const passwd = req.body.password;

    if(!username || !passwd) {
        console.log('DEBUG: Error: empty....');
        return res.status(422).send({error: 'username or password can not be empty'})
    }

    User.findOne({username: username}, function (err, foundUser) {
        if(err) {
            console.log('DEBUG: Error....');
            console.log(err);
            return next(err);
        } else {
            if(foundUser) {
                console.log('DEBUG: user already exists');
                return res.status(422).send({error: 'username in use'});
            } else {
                console.log('DEBUG: Creating user....');
                User.create({username: username, password: passwd}, function (err, newUser) {
                    if(err) {
                        return next(err);
                    } else {
                        console.log(newUser);
                        res.json({token: tokenForUser(newUser)});
                    }
                })
            }
        }
    })
}

exports.login = function (req, res, next) {
    res.send({token: tokenForUser(req.user)});
}