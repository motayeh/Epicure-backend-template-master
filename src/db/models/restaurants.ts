import mongoose from 'mongoose';

const SundaySchema = new mongoose.Schema({
  Open: {
    type: String,
  },
  close: {
    type: String,
  },
});
const MondaySchema = new mongoose.Schema({
  Open: {
    type: String,
  },
  close: {
    type: String,
  },
});
const TuesdaySchema = new mongoose.Schema({
  Open: {
    type: String,
  },
  close: {
    type: String,
  },
});
const WednesdaySchema = new mongoose.Schema({
  Open: {
    type: String,
  },
  close: {
    type: String,
  },
});
const ThursdaySchema = new mongoose.Schema({
  Open: {
    type: String,
  },
  close: {
    type: String,
  },
});
const FridaySchema = new mongoose.Schema({
  Open: {
    type: String,
  },
  close: {
    type: String,
  },
});
const SuturdaySchema = new mongoose.Schema({
  Open: {
    type: String,
  },
  close: {
    type: String,
  },
});
const working_DaysSchema = new mongoose.Schema({
  Sunday: {
    type: SundaySchema,
    required: true,
  },

  Monday: {
    type: MondaySchema,
    required: true,
  },
  Tuesday: {
    type: TuesdaySchema,
    required: true,
  },
  Wednesday: {
    type: WednesdaySchema,
    required: true,
  },
  Thursday: {
    type: ThursdaySchema,
    required: true,
  },
  Friday: {
    type: FridaySchema,
    required: true,
  },
  Suturday: {
    type: SuturdaySchema,
    required: true,
  },
});
const restaurantsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    chef: {
      type: String,
      required: true,
    },
    chefID: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    id: {
      type: Number,
      require: true,
    },
    rate: {
      type: Number,
    },
    since: {
      type: Number,
    },
    working_Days: {
      type: working_DaysSchema,
    },
  },
  { timestamps: true }
);

const Restaurants = mongoose.model('Restaurants', restaurantsSchema);

export default Restaurants;
