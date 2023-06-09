import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  created_At: {
    type: String,
    required: true,
  },
  login_At: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

export { User };
