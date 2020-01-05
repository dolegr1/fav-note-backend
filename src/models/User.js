const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  }
}, {
  timestamps: true
});

UserSchema.plugin(passportLocalMongoose, { userNameField: 'userName' });

module.exports = mongoose.model('users', UserSchema);