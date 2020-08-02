const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcrypt-nodejs');

const UserSchema = new Schema({
    username: {type: String, unique: true, lowercase: true},
    password: String
});

UserSchema.pre('save', function (next) {
    const user = this;
    bcrypt.genSalt(10, function (err, salt) {
        if(err) return next(err);
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if(err) return next(err);
            user.password = hash;
            next();
        })
    })
})

UserSchema.methods.comparePassword = function (candidate, callback) {
    bcrypt.compare(candidate, this.password, function (err, isMatch) {
        if(err) return callback(err);
        callback(null, isMatch);
    })
}

const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;