import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  
  recipeName: {
    type: String,
    required: true,
    lowercase: true
  },
  image: { type: String},
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  ingredients: [
    {
      ingredientName: {
        type: String,
        required: false,
        lowercase: true
      },
      qty: {
        type: Number,
        required: false
      },
      qtyType: {
        type: String,
        required: false,
        lowercase: true
      },
      _id : false
    }
  ],
  steps: [
    {
      step:{
        type: String,
        lowercase: false
      },
      _id: false
    }
  ],
  description: {
    type: String,
    lowercase: true
  },
  dateCreated:{
    type: Date,
    default: Date.now,
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
export default Recipe;