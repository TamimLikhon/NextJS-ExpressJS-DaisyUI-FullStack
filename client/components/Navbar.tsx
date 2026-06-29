'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { FaBars, FaBook, FaChartLine, FaEye, FaHome, FaSignOutAlt } from 'react-icons/fa';
import { BiSolidCategory } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { useSession, signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
	const pathname = usePathname();
	const router = useRouter();
	const { status, data: session } = useSession();

	const navLinkClass = (path: string) =>
		`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
			pathname === path
				? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]'
				: 'text-gray-700 hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]'
		}`;

	return (
		<div className='z-30 sticky top-0'>
			<div className='w-full flex justify-between h-16 navbar bg-white border-b border-gray-200 text-gray-900'>
				<div className='flex items-center'>
					<Link href={'/'} className='text-xl flex items-center gap-2 px-3'>
						<Image
							src={'/logo.png'}
							alt='Logo'
							width={80}
							height={90}
							className='rounded'
						/>
						<span className='font-semibold tracking-tight'>
							Boilerplate
						</span>
					</Link>
				</div>
				<div className='hidden lg:flex items-center gap-4'>
                    <NavigationMenu>
                        <NavigationMenuList className='gap-1'>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), pathname === '/' && 'bg-[hsl(var(--accent))]')}>
                                    <Link href="/" className="flex items-center">
                                        <FaHome className="mr-2" /> Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), pathname === '/recent-news' && 'bg-[hsl(var(--accent))]')}>
                                    <Link href="/recent-news" className="flex items-center">
                                        <FaBook className="mr-2" /> Recent News
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), pathname === '/categorized' && 'bg-[hsl(var(--accent))]')}>
                                    <Link href="/categorized" className="flex items-center">
                                        <BiSolidCategory className="mr-2" /> Categorized
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), pathname === '/most-viewed' && 'bg-[hsl(var(--accent))]')}>
                                    <Link href="/most-viewed" className="flex items-center">
                                        <FaEye className="mr-2" /> Most Viewed
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), pathname === '/trending' && 'bg-[hsl(var(--accent))]')}>
                                    <Link href="/trending" className="flex items-center">
                                        <FaChartLine className="mr-2" /> Trending
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <div className="flex items-center h-full pt-1">
						{status === 'unauthenticated' && (
							<Link href={'/profile'} className={navLinkClass('/profile')}>
								<CgProfile className="mr-2" />
								Profile
							</Link>
						)}
						{status === 'authenticated' && (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <button
                                        type='button'
                                        className='rounded-full focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2 flex items-center justify-center mb-1'
                                        aria-label='Open profile menu'>
                                        <Image
                                            className='rounded-full border border-gray-200 cursor-pointer object-cover'
                                            src={session?.user?.image as string}
                                            width={32}
                                            height={32}
                                            alt='Profile Picture'
                                        />
                                    </button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="w-56">
                                    <DropdownMenuLabel>
                                        <p className='text-sm font-medium text-gray-900 truncate'>
                                            {session?.user?.name || 'User'}
                                        </p>
                                        <p className='text-xs text-gray-500 font-normal truncate'>
                                            {session?.user?.email}
                                        </p>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem onClick={() => router.push('/profile')} className="cursor-pointer">
                                        <CgProfile className='mr-2 text-lg' />
                                        Profile
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => signOut()} className="text-red-600 focus:text-red-600 cursor-pointer">
                                        <FaSignOutAlt className="mr-2" />
                                        Sign Out
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
						)}
					</div>
				</div>
				<div className='flex-none lg:hidden flex items-center pr-3'>
					<Button
						variant='ghost'
						size='icon'
						type='button'
						aria-label='open sidebar'
                        asChild>
						<label htmlFor='my-drawer-3'>
						    <FaBars />
                        </label>
					</Button>
				</div>
			</div>
			<div className='drawer drawer-end z-20'>
				<input type='checkbox' id='my-drawer-3' className='drawer-toggle' />
				<div className='drawer-side'>
					<label
						htmlFor='my-drawer-3'
						aria-label='close sidebar'
						className='drawer-overlay'></label>
					<div className='menu p-4 w-80 min-h-full bg-white border-l border-gray-200 flex flex-col gap-1 text-gray-900'>
						<p>
							<label
								htmlFor='my-drawer-3'
								className='cursor-pointer hover:bg-[hsl(var(--accent))] h-10 flex items-center p-3 rounded-md'>
								<span
									className={`w-full text-lg flex items-center gap-2 ${
										pathname === '/' && 'text-[hsl(var(--primary))] font-semibold'
									}`}
									onClick={() => router.push('/')}>
									<FaHome />
									Home
								</span>
							</label>
						</p>
						<p>
							<label
								htmlFor='my-drawer-3'
								className='cursor-pointer hover:bg-[hsl(var(--accent))] h-10 flex items-center p-3 rounded-md'>
								<span
									className={`w-full text-lg flex items-center gap-2 ${
										pathname === '/recent-news' && 'text-[hsl(var(--primary))] font-semibold'
									}`}
									onClick={() => router.push('/recent-news')}>
									<FaBook />
									Recent News
								</span>
							</label>
						</p>
						<p>
							<label
								htmlFor='my-drawer-3'
								className='cursor-pointer hover:bg-[hsl(var(--accent))] h-10 flex items-center p-3 rounded-md'>
								<span
									className={`w-full text-lg flex items-center gap-2 ${
										pathname === '/categorized' && 'text-[hsl(var(--primary))] font-semibold'
									}`}
									onClick={() => router.push('/categorized')}>
									<BiSolidCategory />
									Categorized
								</span>
							</label>
						</p>
						<p>
							<label
								htmlFor='my-drawer-3'
								className='cursor-pointer hover:bg-[hsl(var(--accent))] h-10 flex items-center p-3 rounded-md'>
								<span
									className={`w-full text-lg flex items-center gap-2 ${
										pathname === '/most-viewed' && 'text-[hsl(var(--primary))] font-semibold'
									}`}
									onClick={() => router.push('/most-viewed')}>
									<FaEye />
									Most Viewed
								</span>
							</label>
						</p>
						<p>
							<label
								htmlFor='my-drawer-3'
								className='cursor-pointer hover:bg-[hsl(var(--accent))] h-10 flex items-center p-3 rounded-md'>
								<span
									className={`w-full text-lg flex items-center gap-2 ${
										pathname === '/trending' && 'text-[hsl(var(--primary))] font-semibold'
									}`}
									onClick={() => router.push('/trending')}>
									<FaChartLine />
									Trending
								</span>
							</label>
						</p>
						<p>
							<label
								htmlFor='my-drawer-3'
								className='cursor-pointer hover:bg-[hsl(var(--accent))] h-10 flex items-center p-3 rounded-md'>
								<span
									className={`w-full text-lg flex items-center gap-2 ${
										pathname === '/profile' && 'text-[hsl(var(--primary))] font-semibold'
									}`}
									onClick={() => router.push('/profile')}>
									<CgProfile />
									Profile
								</span>
							</label>
						</p>
						{status === 'authenticated' && (
							<p>
								<label
									htmlFor='my-drawer-3'
									className='cursor-pointer hover:bg-red-50 h-10 flex items-center p-3 rounded-md'>
									<span
										className='w-full text-lg flex items-center gap-2 text-red-600'
										onClick={() => signOut()}>
										<FaSignOutAlt />
										Sign Out
									</span>
								</label>
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
