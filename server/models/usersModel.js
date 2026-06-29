import { Schema, model } from 'mongoose';

const userSchema = Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			default: 'user',
			enum: ['user', 'admin', 'superadmin'],
		},
		imageUrl:{
			type: String,
			required: true,
		},
		profilecompleted: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

export default model('User', userSchema);
