import NextAuth, { type AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: { strategy: 'jwt' as const },
	callbacks: {
		async jwt({ token, account, profile }) {
			if (account && profile) {
				const res = await fetch(
					`${process.env.NEXT_PUBLIC_API_URL}/api/auth/oauth-signin`,
					{
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							name: profile.name,
							email: profile.email,
							image: (profile as Record<string, string>).picture,
						}),
					}
				);

				const data = await res.json();

				if (data.success) {
					token.accessToken = data.data.token;
					token.userId = data.data.user._id;
					token.role = data.data.user.role;
					token.picture = data.data.user.imageUrl;
				}
			}
			return token;
		},
		async session({ session, token }) {
			session.accessToken = token.accessToken as string;
			session.userId = token.userId as string;
			session.role = token.role as string;
			return session;
		},
	},
	pages: {
		signIn: '/',
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
