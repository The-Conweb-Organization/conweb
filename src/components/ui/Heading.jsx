import React from 'react';

const Heading = ({ headingType, children }) => {
	return headingType === 'h1' ? (
		<h1 className='flex justify-between items-center text-center text-conOrange-200 font-bold text-conH2'>
			{children}
		</h1>
	) : (
		<h2 className='flex justify-between items-center text-center text-conOrange-200 font-bold text-conH2'>
			{children}
		</h2>
	);
};

export default Heading;
