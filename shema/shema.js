const Joi = require("joi");

const addSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    favorite: Joi.boolean(),
  });

  const updateFavoriteSchema = Joi.object({
    favorite: Joi.bool().required(),
  })

  const schemas = { 
    addSchema,
    updateFavoriteSchema,
  }

module.exports = schemas;