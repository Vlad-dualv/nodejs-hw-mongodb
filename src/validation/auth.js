import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least (#limit) characters',
    'string.max': 'Username should have at least (#limit) characters',
    'any.required': 'Username is required',
  }),
  email: Joi.string().email().required().messages({
    'string.base': 'Email should be a string',
    'string.min': 'Email should have at least (#limit) characters',
    'string.max': 'Email should have at least (#limit) characters',
    'any.required': 'Email is required',
  }),
  password: Joi.string().min(10).max(30).required().messages({
    'string.base': 'Password should be a string',
    'string.min': 'Password should have at least (#limit) characters',
    'string.max': 'Password should have at least (#limit) characters',
    'any.required': 'Password is required',
  }),
});
