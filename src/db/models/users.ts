import mongoose, { Schema } from 'mongoose';

const usersSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

const Users = mongoose.model('Users', usersSchema);

export default Users;
