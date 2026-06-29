import joi from 'joi';

export const createPostSchema = joi.object({
	title: joi.string().min(3).max(60).required(),
	description: joi.string().min(3).max(600).required(),
	userId: joi.string().required(),
});
