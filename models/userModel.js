import mongoose from 'mongoose';
import isEmail from 'validator/lib/isEmail.js';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please enter a username'],
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Please enter a valid email']
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minlength: 8
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    }
  },
);


//  pre-save process hooks
userSchema.pre('save', async function (next) {
  console.log('user is about to be registered',this);   //  use common function to be able to use 'this'
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
})

//  post-save process hooks
userSchema.post('save', (doc, next) => {
  console.log('user has been registered', doc)
  next();
})

const User = mongoose.model('User', userSchema);
export default User;