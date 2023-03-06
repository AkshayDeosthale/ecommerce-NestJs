import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
  name: String,
  subcategories: [
    {
      name: String,
      id: String,
    },
  ],
  numberOfProducts: Number,
});
