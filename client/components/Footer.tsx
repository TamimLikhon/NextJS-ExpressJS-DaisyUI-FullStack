export default function Footer() {
	return (
		<footer className='bg-white border-t border-gray-200 text-gray-700 py-8 mt-auto'>
			<div className='container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3'>
				<p className='text-sm text-gray-500'>
					&copy; {new Date().getFullYear()} Boilerplate. All rights reserved.
				</p>
				<div className='flex items-center gap-4 text-sm text-gray-500'>
					<a href='/about' className='hover:text-gray-900 transition-colors'>
						About
					</a>
					<span className='text-gray-300'>·</span>
					<a href='https://github.com' className='hover:text-gray-900 transition-colors'>
						GitHub
					</a>
				</div>
			</div>
		</footer>
	);
}
