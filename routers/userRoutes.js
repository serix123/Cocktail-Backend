import express from 'express';
import User from '../models/userModel.js';

//  handle errors
const errorHandler = (err) => {
  console.log(err.message, err.code);
  let errors = { username:'', email: '', password: ''};
  
  //  duplicate error code
  if (err.code === 11000) {
    if (err.message.includes('username')) {
      errors.username = 'username is alread taken.'
      return errors;
    }

    if (err.message.includes('email')) {
      errors.email = 'Email is alread taken.'
      return errors;
    }
    
  }

  //  error validation
  if (err.message.includes('User validation failed')) {

    //  destructuring {properties} from err.errors.properties
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }


    return errors;
}

const userRouter = express.Router();

// /register  POST  create new user to DB
userRouter.post('/register', async (req, res) => {

  const user = req.body;
  const newUser = new User(user)

  // const newUser = new User({
  //   username: req.body.username,
  //   email: req.body.email,
  //   password: req.body.password,
  // });

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);    
  } catch (err) {
    const errors = errorHandler(err);
    res.status(400).json({errors})
  }

})

// get users list ADMIN
userRouter.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
})

//  /login   GET   log in page
//  /signup  GET   sign up page
//  /login   POST  authenticate a user
//  /logout  GET   log a user out

// update user info | PUT or PATCH
// delete user


export default userRouter;