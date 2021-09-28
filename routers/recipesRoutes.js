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
})

// get recipe by ID

app.get('/:recipeId', (req, res) => {
  res.send(req.params.recipeId)
})

// update recipe


// delete recipe from DB

app.delete('/:recipeId', function(req, res) {
  const { id } = req.params;
  res.send(`Delete record with id id`);
});


export default recipeRouter;