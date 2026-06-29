'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { MdBookmarkAdd } from 'react-icons/md';
interface props {
	newsIdentifier: string;
}
export default function BookmarkButton({ newsIdentifier }: props) {
	const { data: session } = useSession();
	const [bookmarked, setBookmarked] = useState(false);

	useEffect(() => {
		const fetchBookmarkStatus = async () => {
			//pass authstatus
			try {
				const res = await fetch(
					`/api/bookmarks/bookmarkStatus?newsIdentifier=${newsIdentifier}`
				);
				const { hasBookmarked } = await res.json();
				setBookmarked(hasBookmarked);
			} catch (error) {
				console.log(error);
			}
		};
		fetchBookmarkStatus();
	}, [newsIdentifier, session]);

	const handleBookmark = async () => {
		//pass authstatus

		try {
			const url = bookmarked
				? `/api/bookmarks/removeBookmark?newsIdentifier=${newsIdentifier}`
				: `/api/bookmarks/doBookmark?newsIdentifier=${newsIdentifier}`;

			const method = bookmarked ? 'DELETE' : 'POST';
			const res = await fetch(url, { method });

			if (res.ok) {
				setBookmarked(!bookmarked);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<MdBookmarkAdd
			className={`cursor-pointer h-6 w-6 transition-colors hover:scale-110 ${
				bookmarked ? 'text-[hsl(var(--primary))]' : 'text-gray-400 hover:text-gray-700'
			}`}
			onClick={handleBookmark}
		/>
	);
}
