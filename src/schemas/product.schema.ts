import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  category: String,
  gender: String,
  cost: Number,
  quantity: Number,
  discount: Number,
  inCart: Boolean,
  isWishlist: Boolean,
  isReturnable: Boolean,
  isReplacable: Boolean,
  subcategory: String,
  images: [
    {
      name: String,
      url: String,
    },
  ],
  description: String,
  specification: {
    weight: Number,
    dimentions: String,
    itemsInPackage: Number,
  },
});
