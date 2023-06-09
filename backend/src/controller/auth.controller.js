import bcrypt from 'bcryptjs';
import moment from 'moment';
import { User } from '../model/user.schema.js';
import { BadRequest, InternalServerError, NotFountError } from '../utils/errors.js';
import jwt from '../utils/jwt.js';

const signUp = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;

    const user = await User.findOne({ email: email });
    if (user != null) {
      return next(new BadRequest(400, 'Username or email already been teken !'));
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const createdData = moment(Date.now()).format('LLL');
    const newuser = new User({
      username,
      password: hashedPassword,
      email,
      created_At: createdData,
      status: 'active',
      login_At: 'null',
      checked: false,
    });

    newuser.save();

    const token = jwt.sign({ email });

    res.status(201).json({ status: 201, message: 'New user created!', token, data: newuser });
  } catch (error) {
    next(new InternalServerError(500, error.message));
  }
};

const login = async (req, res, next) => {
  try {
    const { password, email } = req.body;

    const user = await User.findOne({ email: email });

    if (user == null) {
      return next(new NotFountError(400, 'user not found !'));
    }

    const hashedPassword = await bcrypt.compare(password, user.password);

    if (!hashedPassword) {
      return next(new BadRequest(400, 'password does  not match !'));
    }

    const userUpdate = await User.findOneAndUpdate(
      { email: email },
      { $set: { login_At: `${moment(Date.now()).format('LLL')}` } },
    );
    const token = jwt.sign({ email });

    res.status(200).json({ status: 200, message: 'user is found !', token, data: userUpdate });
  } catch (error) {
    next(new InternalServerError(500, error.message));
  }
};

export default { signUp, login };
