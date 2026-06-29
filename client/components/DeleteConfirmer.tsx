import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Loader from './Loader';

interface props {
	ModelType: string;
	deleteAction: () => void;
}

export default function DeleteConfirmer({ ModelType, deleteAction }: props) {
	const [loading, setLoading] = useState(false);
	const router = useRouter();
	return (
		<div className='h-screen w-full flex items-center justify-center bg-white'>
			<div className='w-full bg-white border border-gray-200 shadow-sm h-56 -mt-20 mx-6 rounded-lg flex flex-col justify-evenly items-center'>
				<h2 className='font-bold my-4 text-red-500 px-4 text-center'>
					Sure about deleting this {ModelType}?
				</h2>
				<button
					onClick={() => {
						setLoading(true);
						deleteAction();
						router.replace('/admin-controls');
					}}
					className='px-6 py-2 font-medium rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors shadow-sm'>
					Yes, delete it
				</button>
				{loading && <Loader />}
			</div>
		</div>
	);
}
