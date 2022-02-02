import React, { Fragment } from 'react';
import { useLocation } from '@reach/router';
import useDefaultTemplate from '../hooks/useDefaultTemplate';
import SectionContainer from '../components/ui/SectionContainer';
import Heading from '../components/ui/Heading';

const DefaultTemplate = () => {
	const templateDefault = useDefaultTemplate();
	const location = useLocation();

	return (
		<SectionContainer>
			{templateDefault
				.filter(item => {
					return `/${item.url}` === location.pathname;
				})
				.map(({ title, longText: { childMarkdownRemark } }, idx) => (
					<Fragment key={idx}>
						<Heading headingType='h2'>{title}</Heading>
						<div
							className='mx-2 mt-12'
							dangerouslySetInnerHTML={{ __html: childMarkdownRemark.html }}
						/>
					</Fragment>
				))}
		</SectionContainer>
	);
};

export default DefaultTemplate;
