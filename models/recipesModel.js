import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  
  recipeName: {
    type: String,
    required: true,
    lowercase: true
  },
  // imageURL: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  ingredients: [
    {
      name: {
        type: String,
        required: true,
        lowercase: true
      },
      quantity: {
        type: Number,
        required: false
      },
      quantityType: {
        type: String,
        required: false,
        lowercase: true
      },
      _id : false
    }
  ],
  steps: [
    {
      text:{
        type: String,
        lowercase: false
      },
      _id: false
    }
  ],
  dateCreated:{
    type: Date,
    default: Date.now,
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);
export default Recipe;