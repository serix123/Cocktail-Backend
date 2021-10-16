import express from 'express';
import mongoose from "mongoose";
import Recipe from '../models/recipesModel.js';

const recipeRouter = express.Router();

// add recipes to DB
recipeRouter.post('/', async (req, res) => {
  const recipe = req.body;
  console.log(recipe)
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

recipeRouter.get('/:recipeId', (req, res) => {
  res.send(req.params.recipeId)
})

// update recipe
recipeRouter.patch("/:id", async(req, res) => {
  const { id: _id } = req.params;
  const recipe = req.body;
  if (mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Recipe ID doesn not exist.');
  
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(_id, {...post,_id}, {new: true})
    res.json(updatedRecipe);
    
  } catch (error) {
    console.log(error)
  }
  
});

// delete recipe from DB

recipeRouter.delete('/:recipeId', function(req, res) {
  const { id } = req.params;
  res.send(`Delete record with id id`);
});


export default recipeRouter;