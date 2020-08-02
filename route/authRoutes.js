const express           = require('express');
const Authentication = require('../controller/authentication');
const passport = require('passport');
const passportService = require('../service/passport');

const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

router = express.Router();

router.post('/signUp', Authentication.signUp);
router.post('/login', requireSignin, Authentication.login);
router.get('/test', requireAuth, function (req, res) {
    res.send('Congrats!');
})

module.exports = router;