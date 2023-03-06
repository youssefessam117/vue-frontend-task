import Joi from "joi";

export let validateForm = (user) => {
  const schema = Joi.object({
    arrivingArabicName: Joi.string().alphanum().required().min(2).max(20),
    arrivingEnglishName: Joi.string().alphanum().required().min(2).max(20),
  });
  return schema.validate(user, { abortEarly: false });
};
