import React, { useContext } from 'react';
import { TemplateContext } from '../../hooks/useTemplateContext';

const ContentContainer = ({ children }) => {
	const templateCtx = useContext(TemplateContext);

	switch (templateCtx.pathname) {
		case '/':
			return (
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8  md:border-2 border-conBlueGreen-700 md:p-4 mt-12 rounded-lg'>
					{children}
				</div>
			);
		case templateCtx.pathname.startsWith('/blog/category'):
		case 'blog':
		case 'search':
			return (
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
					{children}
				</div>
			);
		default:
			return <div className='sm:grid sm:grid-cols-6 gap-x-4'>{children}</div>;
	}
};

export default ContentContainer;
