'use client';

import Loader from '@/components/Loader';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Bookmark() {
	const [bookmarks, setBookmarks] = useState([]);
	const [page, setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [end, setEnd] = useState(false);
	const [endErr, setEndErr] = useState(false);
	const { status } = useSession();

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);

			try {
				const response = await fetch(`/api/bookmarks?page=${page}`);

				if (!response.ok) {
					throw new Error(`Http error! Status: ${response.status}`);
				}

				const dataArr = await response.json();

				if (!dataArr.bookmarks) {
					setError('Data not received');
					return;
				}

				// setBookmarks((prev) => [...prev, ...dataArr.bookmarks]);

				if (dataArr.bookmarks.length < 1 && page === 1) {
					setEndErr(true);
					setEnd(true);
				}
			} catch (error: string | any) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [page]);

	const handleScroll = () => {
		if (
			window.innerHeight + document.documentElement.scrollTop + 1 >=
			document.documentElement.scrollHeight
		) {
			if (!end) {
				setPage((prev) => prev + 1);
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});

	if (status === 'loading') {
		return <Loader />;
	}

	return (
		<div>

		</div>
	);
}
