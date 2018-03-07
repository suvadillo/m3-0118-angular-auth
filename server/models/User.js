const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  userFbId: { type: String, default: '' },
  imgUrl: { type: String, default: "https://placeholdit.imgix.net/~text?txtsize=50&txt=User&w=50&h=50" }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;