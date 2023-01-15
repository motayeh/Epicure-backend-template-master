import mongoose from 'mongoose';

const searchSchema = new mongoose.Schema({
  input: {
    type: String,
  },
});
const Results = mongoose.model('search', searchSchema);
export default Results;
