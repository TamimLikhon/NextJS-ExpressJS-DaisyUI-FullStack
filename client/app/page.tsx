import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<div className='flex flex-col flex-1 items-center justify-center bg-white font-sans px-4'>
			<div className='max-w-2xl text-center'>
				<span className='inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-gray-700 uppercase bg-gray-100 border border-gray-200 rounded-full'>
					Fullstack Boilerplate
				</span>
				<h1 className='text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 mb-4'>
					Welcome to Boilerplate
				</h1>
				<p className='text-lg text-gray-600 mb-8 leading-relaxed'>
					A clean, white-themed Next.js + Express starter wired with NextAuth,
					JWT auth bridging, MongoDB, and pre-built UI primitives. Clone, configure,
					and ship.
				</p>
				<div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
					<Button asChild size='lg'>
						<Link href='/profile'>Get Started</Link>
					</Button>
					<Button asChild variant='outline' size='lg'>
						<Link href='/'>Learn More</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
