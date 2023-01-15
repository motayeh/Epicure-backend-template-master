import mongoose from 'mongoose';

const OptionsSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  title: {
    type: String,
  },
  type: {
    type: String,
  },
  values: {
    type: [String],
  },
});
const SidesSchema = new mongoose.Schema({
  options: {
    type: [OptionsSchema],
  },
});
const dishSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
  },
  ResturantID: {
    type: Number,
    require: true,
  },
  ResturantName: {
    type: String,
    require: true,
  },
  DishImage: {
    type: String,
  },
  DishName: {
    type: String,
  },
  DishDescreption: {
    type: String,
  },
  FoodCategory: {
    type: String,
  },
  Meals: {
    type: String,
  },
  Price: {
    type: String,
  },
  Sides: {
    type: SidesSchema,
  },
});
const Dish = mongoose.model('Dishes', dishSchema);

export default Dish;
