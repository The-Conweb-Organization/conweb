import React from 'react';
import { useLocation } from '@reach/router';

const ContentContainer = ({ children }) => {
	const { pathname } = useLocation();

	if (pathname === '/') {
		return (
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:p-4 mt-12 rounded-lg relative'>
				{children}
			</div>
		);
	} else if (
		(pathname.startsWith('/blog') && !pathname.startsWith('/blog/post')) ||
		pathname.startsWith('/blog/category') ||
		pathname.startsWith('/search')
	) {
		return (
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
				{children}
			</div>
		);
	} else {
		return <div className='sm:grid sm:grid-cols-6 gap-x-4'>{children}</div>;
	}
};

export default ContentContainer;
