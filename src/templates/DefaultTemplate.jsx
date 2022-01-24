import React, { Fragment } from 'react';
import { useLocation } from '@reach/router';
import useDefaultTemplate from '../hooks/useDefaultTemplate';

const DefaultTemplate = () => {
	const templateDefault = useDefaultTemplate();
	const location = useLocation();

	return (
		<section>
			<div className='mx-auto px-4 md:px-12 pt-12'>
				{templateDefault
					.filter(item => {
						return `/${item.url}` === location.pathname;
					})
					.map(({ title, longText: { childMarkdownRemark } }, idx) => (
						<Fragment key={idx}>
							<h2 className='text-center text-conOrange-200 font-bold text-conH2'>
								{title}
							</h2>
							<div
								className='mx-2 mt-12'
								dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }}
							/>
						</Fragment>
					))}
			</div>
		</section>
	);
};

export default DefaultTemplate;
