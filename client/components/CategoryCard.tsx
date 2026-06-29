import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface props {
	category: {
		_id: string;
		name: string;
		description: string;
		thumbnailURL: string;
	};
}


export default function CategoryCard({ category }: props) {
	const router = useRouter();
	return (
		<div className='card md:w-96 w-full bg-white border border-gray-200 shadow-sm rounded-lg overflow-hidden hover:shadow-md transition-shadow'>
			{category?.thumbnailURL && (
				<figure>
					<Image
						width={600}
						height={600}
						src={category?.thumbnailURL}
						alt={category?.name}
						className='object-cover h-48 w-full'
					/>
				</figure>
			)}

			<div className='card-body'>
				<h2 className='card-title text-gray-900'>{category?.name}</h2>
				{category?.description && <p className='text-gray-600'>{category?.description}</p>}

				<div className='card-actions justify-end gap-2'>
					<button
						className='btn btn-primary'
						onClick={() =>
							router.push(`/admin-controls/categories/update/${category._id}`)
						}>
						Edit
					</button>
					<button
						className='btn btn-error'
						onClick={() =>
							router.push(`/admin-controls/categories/delete/${category._id}`)
						}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}
