const Joi = require('joi');

  const validateUser = (body) => {
    const validJoiData = Joi.object({
      displayName: Joi.string().min(8).required().messages({ 
        'string.min': '400|"displayName" length must be at least 8 characters long',
        'any.required': '400|Some required fields are missing',
      }),
      email: Joi.string().email().required().messages({ 
        'string.email': '400|"email" must be a valid email',
        'any.required': '400|Some required fields are missing',
      }), 
      password: Joi.string().min(6).required().messages({ 
        'string.min': '400|"password" length must be at least 6 characters long',
        'any.required': '400|Some required fields are missing',
      }),
      image: Joi.string(),
    });
    const { error, value } = validJoiData.validate(body);

    if (error) throw error;

    return value;
  };

  module.exports = { validateUser };