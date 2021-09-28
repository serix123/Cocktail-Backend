import Recipe from '../models/recipesModel.js';


export const createRecipe = async (req, res) => {
  const recipe = req.body;
  const newRecipe = new Recipe(recipe);
  try {
    const savedRecipe = await newRecipe.save();
    res.json(savedRecipe);  
    
  } catch (error) {
    console.log(error)
  }
}


export const getRecipe = async (req, res) => {
  try{
    const recipes = await Recipe.find();
    res.json(recipes)
  }catch(error){
    console.log(error)
  }
}