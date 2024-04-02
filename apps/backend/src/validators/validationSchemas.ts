import Joi from 'joi';

export const registerSchema = Joi.object({
  firstName: Joi.string().max(30).required(),
  lastName: Joi.string().max(30).required(),
  email: Joi.string().email().max(255).required(),
  password: Joi.string().min(6).required(),
});
