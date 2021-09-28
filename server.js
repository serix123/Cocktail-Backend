import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import recipeRouter from './routers/recipesRoutes.js';
import userRouter from './routers/userRoutes.js';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// add DB connection
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(app.listen(port, () => console.log(`listening on port ${port}`)))
  .catch((err) => console.log(err));


// add api routes
app.use('/api/recipes', recipeRouter);
app.use('/api/users', userRouter);
 

app.get('/', (req, res)=>{
    res.send('Server is ready');
});




