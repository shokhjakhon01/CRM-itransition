import { BadRequest, InternalServerError } from '../utils/errors.js';
import { LoginSchema, RegisterSchema } from '../utils/validation.js';

export default (req, res, next) => {
  try {
    if (req.url == '/login' && req.method == 'POST') {
      const { error } = LoginSchema.validate(req.body);
      if (error) next(new BadRequest(400, error.message));
    }

    if (req.url == '/register' && req.method == 'POST') {
      const { error } = RegisterSchema.validate(req.body);

      if (error) next(new BadRequest(400, error.message));
    }

    next();
  } catch (error) {
    return next(new InternalServerError(500, error.message));
  }
};
