const express       = require('express'),
    path            = require('path'),
    http            = require('http'),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    keys            = require('./config/keys'),
    indexRoutes     = require('./route/indexRoutes'),
    mediaRoutes     = require('./route/mediaRoutes');

const app   = express(),
     port   = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json({type: '*/*'}));

// routes
app.use('/', indexRoutes);
app.use('/media', mediaRoutes);
// shift to production mode
if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

// listening port
app.listen(port, function (req, res) {
    console.log("server started...");
    console.log("listening on port " + port);
});