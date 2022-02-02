import React from 'react';

const SectionContainer = ({ children }) => {
	return (
		<section>
			<div className='mx-auto px-4 md:px-12 pt-12'>{children}</div>
		</section>
	);
};

export default SectionContainer;
