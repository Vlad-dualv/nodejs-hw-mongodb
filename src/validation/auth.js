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

export const loginUserSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.base': 'Email should be a string',
  }),
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
    'string.base': 'Password should be a string',
  }),
});

export const requestResetEmailSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'any.required': 'Email is required',
    'string.base': 'Email should be a string',
  }),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().required().messages({
    'any.required': 'Password is required',
    'string.base': 'Password should be a string',
  }),
  token: Joi.string().required().messages({
    'any.required': 'Token is required',
    'string.base': 'Token should be a string',
  }),
});

export const loginWithGoogleOAuthSchema = Joi.object({
  code: Joi.string().required().messages({
    'any.required': 'Code is required',
    'string.base': 'Code should be a string',
  }),
});
