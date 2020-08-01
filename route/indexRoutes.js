const express           = require('express');
        router            = express.Router();

        /*
router.get('/', function (req, res) {
    res.send('test');
});
*/
router.get('/test', function (req, res) {
    res.send('Congrats!');
})

module.exports = router;