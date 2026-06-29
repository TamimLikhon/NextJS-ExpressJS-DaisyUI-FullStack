'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';

export default function SigninBtn() {
	const { status, data: session } = useSession();

	if (status === 'authenticated') {
		return (
			<div className='flex flex-col items-center justify-center text-gray-900'>
				<div className='shadow-md border border-gray-200 rounded-lg p-8 max-w-md w-full text-center bg-white'>
					<Image
						src={session?.user?.image || ''}
						alt='Profile'
						width={80}
						height={80}
						className='mx-auto rounded-full mb-4 border border-gray-200'
					/>
					<h1 className='text-2xl font-semibold mb-2'>
						{session?.user?.name || 'User'}
					</h1>
					<p className='text-gray-500 mb-6'>{session?.user?.email}</p>
					<Button
						variant='destructive'
						size='default'
						onClick={() => signOut()}
						className='min-w-32'>
						Sign Out
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div className='flex flex-col items-center justify-center text-gray-900'>
			<div className='shadow-md border border-gray-200 rounded-lg p-8 max-w-md w-full text-center bg-white'>
				<div className='mb-6'>
					<Image
						alt='Logo'
						src={'/logo.png'}
						width={300}
						height={300}
						className='mx-auto'
					/>
				</div>
				<h1 className='text-3xl font-semibold mb-4'>Welcome Back!</h1>
				<p className='text-gray-600'>Sign in to access your account and start your journey.</p>

				<Button
					variant='outline'
					size='lg'
					onClick={() => signIn('google')}
					className='mt-4 mx-auto gap-3'>
					<Image
						src={'/google.png'}
						width={20}
						height={20}
						alt='google logo'
					/>
					Sign in with Google
				</Button>
				<div className='mt-6 text-sm text-gray-500'>
					By signing, you agree to our{' '}
					<Link href={'/tos'} className='text-blue-500 hover:underline'>
						Terms
					</Link>{' '}
					and{' '}
					<Link href={'/privacy'} className='text-blue-500 hover:underline'>
						Conditions
					</Link>
				</div>
			</div>
		</div>
	);
}
