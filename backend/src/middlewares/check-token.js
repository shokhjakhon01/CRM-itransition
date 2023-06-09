import { User } from '../model/user.schema.js';
import { AuthorizationError, ForBiddenError, InternalServerError } from '../utils/errors.js';
import jwt from '../utils/jwt.js';

export default async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      next(new AuthorizationError(400, 'token required'));
    } else {
      const data = jwt.verify(token);

      const checkUser = await User.find({ email: data?.email });

      if (!checkUser) {
        return next(new ForBiddenError(400, 'token does not much'));
      }
      req.user = checkUser[0];
      next();
    }
  } catch (error) {
    return next(new InternalServerError(500, error.message));
  }
};
