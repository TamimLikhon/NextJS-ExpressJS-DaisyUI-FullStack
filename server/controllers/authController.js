import jwt from 'jsonwebtoken';
import User from '../models/usersModel.js';

export async function oauthSignin(req, res) {
	const { name, email, image } = req.body;

	try {
		if (!email) {
			return res
				.status(400)
				.json({ success: false, message: 'Email is required' });
		}

		let user = await User.findOne({ email });

		if (user) {
			user.name = name || user.name;
			user.imageUrl = image || user.imageUrl;
			await user.save();
		} else {
			user = await User.create({
				name,
				email,
				imageUrl: image,
				role: 'user',
			});
		}

		const token = jwt.sign(
			{ userId: user._id, email: user.email, role: user.role },
			process.env.TOKEN_SECRET,
			{ expiresIn: '30d' }
		);

		res.status(200).json({
			success: true,
			message: user ? 'Signed in successfully' : 'Account created successfully',
			data: {
				user: {
					_id: user._id,
					name: user.name,
					email: user.email,
					imageUrl: user.imageUrl,
					role: user.role,
				},
				token,
			},
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ success: false, message: 'Server error' });
	}
}
