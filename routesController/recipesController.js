import mongoose from "mongoose";
import Recipe from "../models/recipesModel.js";

export const createRecipe = async (req, res) => {
  const recipe = req.body;
  const newRecipe = new Recipe(recipe);
  try {
    const savedRecipe = await newRecipe.save();
    res.json(savedRecipe);
  } catch (error) {
    console.log(error);
  }
};

export const getRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.log(error);
  }
};

export const updateRecipe = async (req, res) => {
  const { id: _id } = req.params;
  const recipe = req.body;
  if (mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("Recipe ID doesn not exist.");

  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      _id,
      { ...post, _id },
      { new: true }
    );
    res.json(updatedRecipe);
  } catch (error) {
    console.log(error);
  }
};
