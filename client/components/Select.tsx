import { MdErrorOutline } from 'react-icons/md';

interface props{
	labelAttr: string,
	nameAttr: string,
	classAttr: string,
	placeholderAttr: string,
	requiredAttr: boolean,
	errorAttr: string,
	optionsAttr: string[]
}
export default function Select({
	labelAttr,
	nameAttr,
	classAttr,
	placeholderAttr,
	requiredAttr,
	errorAttr,
	optionsAttr,
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
				<select
					className={`h-full block w-full bg-white border border-gray-300 text-gray-900 outline-none rounded-md placeholder:text-sm placeholder:text-gray-400 focus:ring-1! focus:ring-[hsl(var(--ring))] focus:border-gray-900 transition-colors px-4 py-3 ${classAttr} ${
						errorAttr ? 'border-red-500' : ''
					}`}
					name={nameAttr}
					required={requiredAttr}
					{...props}>
					{placeholderAttr && <option value={''}>{placeholderAttr}</option>}
					{optionsAttr &&
						optionsAttr.map((item: string, index: number) => {
							return (
								<option value={item} key={index}>
									{item}
								</option>
							);
						})}
				</select>
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
