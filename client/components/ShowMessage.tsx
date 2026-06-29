import React from 'react';

interface props {
  msg: string;
}

export default function MsgShower({ msg }: props) {
	return (
		<div className='grid place-items-center w-[calc(95%)] h-screen mx-3'>
			<p className='shadow-md text-center p-8 rounded-lg flex flex-col gap-3 bg-white border border-gray-200 text-red-500 max-w-md'>
				{msg}
			</p>
		</div>
	);
}
