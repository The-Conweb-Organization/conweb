import React from 'react';

const Heading = ({ headingType, isBlogPage, children }) => {
	return headingType === 'h1' ? (
		<h1 className='flex flex-col md:flex-row md:justify-between items-center text-center text-secondary font-bold text-conH2'>
			{children}
		</h1>
	) : (
		<h2
			className={`flex flex-col md:flex-row ${
				isBlogPage ? 'md:justify-between' : 'md:justify-center items-center'
			} items-center text-center text-accent font-bold text-conH2`}
		>
			{children}
		</h2>
	);
};

export default Heading;
