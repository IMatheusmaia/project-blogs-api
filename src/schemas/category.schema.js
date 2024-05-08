const Joi = require('joi');

const categorySchema = Joi.object({
  name: Joi.string().min(3).required(),
});

module.exports = categorySchema;