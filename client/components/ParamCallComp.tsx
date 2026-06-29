'use client';

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function CreateHistory() {
	const params = useParams();
	useEffect(() => {
		const saveHistory = async () => {
			await fetch(
				`/api/history/createHistory?newsIdentifier=${params.newsIdentifier}`,
				{
					method: 'POST',
				}
			);
		};
		saveHistory();
	}, [params]);
	return null;
}
