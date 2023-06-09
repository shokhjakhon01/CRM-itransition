import Joi from 'joi';

export const LoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const RegisterSchema = Joi.object({
  username: Joi.string().min(2).max(32).pattern(new RegExp('^[a-zA-Z0-9]{3,30}')).required(),
  password: Joi.string().min(8).max(100).required(),
  email: Joi.string().required(),
});
