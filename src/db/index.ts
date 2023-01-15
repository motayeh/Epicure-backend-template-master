import mongoose from 'mongoose';

const connectDb = async () => {
  mongoose.set('strictQuery', true);
  await mongoose.connect(
    'mongodb+srv://Motayeh:12Mat21*m@epicure.ra93z6j.mongodb.net/?retryWrites=true&w=majority'
  );
};

export { connectDb };
