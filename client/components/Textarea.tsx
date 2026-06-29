import { MdErrorOutline } from 'react-icons/md';

interface props{
	labelAttr: string,
	nameAttr: string,
	classAttr: string,
	placeholderAttr: string,
	requiredAttr: boolean,
	errorAttr: string
}

export default function Textarea({
	labelAttr,
	nameAttr,
	classAttr,
	placeholderAttr,
	requiredAttr,
	errorAttr,
	...props
}: props) {
	return (
		<label className='form-control'>
			{labelAttr && (
				<div className='label px-0!'>
					<span className='label-text'>{labelAttr}</span>
				</div>
			)}
			<div className='relative'>
				<textarea
					className={`block w-full bg-white border border-gray-300 text-gray-900 outline-none rounded-md placeholder:text-sm placeholder:text-gray-400 focus:ring-1! focus:ring-[hsl(var(--ring))] focus:border-gray-900 transition-colors px-4 py-3 min-h-24 resize-y ${classAttr} ${
						errorAttr ? 'border-red-500' : ''
					}`}
					name={nameAttr}
					placeholder={placeholderAttr}
					required={requiredAttr}
					{...props}></textarea>
			</div>
			{errorAttr && (
				<div className='label px-0!'>
					<span className='label-text text-red-500'>
						<MdErrorOutline className='inline me-2' />
						{errorAttr}
					</span>
				</div>
			)}
		</label>
	);
}
