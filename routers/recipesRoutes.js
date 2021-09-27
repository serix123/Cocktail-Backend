import express from 'express';
import Recipe from '../models/recipesModel.js';

const recipeRouter = express.Router();

// add recipes to DB
recipeRouter.post('/create', async (req, res) => {
  const recipe = req.body;
  const newRecipe = new Recipe(recipe);
  try {
    const savedRecipe = await newRecipe.save();
    res.json(savedRecipe);  
    
  } catch (error) {
    console.log(error)
  }
})

// get all recipes

recipeRouter.get('/', async (req, res) => {
  try{
    const recipes = await Recipe.find();
    res.json(recipes)
  }catch(error){
    console.log(error)
  }
  try {
    const recipe = await Recipe.find();
    res.json(recipe);
  } catch (err) {
    res.json({ message: err });
  }
})

// get recipe by ID


// update recipe


// delete recipe from DB



export default recipeRouter;