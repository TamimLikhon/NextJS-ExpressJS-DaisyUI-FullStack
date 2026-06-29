import { useFormStatus } from 'react-dom';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';

export default function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<Button
			type='submit'
			variant='default'
			size='default'
			disabled={pending}
			className='min-w-28'>
			{pending ? (
				<>
					<Loader size={16} className='p-0' />
					<span>Submitting...</span>
				</>
			) : (
				<span>Submit</span>
			)}
		</Button>
	);
}
