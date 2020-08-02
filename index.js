const express       = require('express'),
    path            = require('path'),
    http            = require('http'),
    bodyParser      = require('body-parser'),
    mongoose        = require('mongoose'),
    cors            = require('cors'),
    morgan          = require('morgan'),
    keys            = require('./config/keys'),
    indexRoutes     = require('./route/indexRoutes'),
    mediaRoutes     = require('./route/mediaRoutes'),
    authRoutes      = require('./route/authRoutes');

const app   = express(),
     port   = process.env.PORT || 5000;

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.json({type: '*/*'}));
app.use(morgan('combined'));
app.use(cors())

// routes
app.use('/', indexRoutes);
app.use('/media', mediaRoutes);
app.use('/auth', authRoutes);
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