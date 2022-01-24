import React from 'react';
import { graphql } from 'gatsby';
import HomeTemplate from '../templates/HomeTemplate';
import BlogTemplate from '../templates/BlogTemplate';
import ProjectsTemplate from '../templates/ProjectsTemplate';
import DefaultTemplate from '../templates/DefaultTemplate';

const getTemplate = contentfulPage => {
	const { template } = contentfulPage;

	switch (template) {
		case 'home':
			return <HomeTemplate {...contentfulPage} />;

		case 'blog':
			return <BlogTemplate {...contentfulPage} />;

		case 'projects':
			return <ProjectsTemplate {...contentfulPage} />;

		default:
			return <DefaultTemplate {...contentfulPage} />;
	}
};

const Page = ({ data: { contentfulPage } }) => {
	return <>{getTemplate(contentfulPage)}</>;
};

export const data = graphql`
	query pageQuery($id: String) {
		contentfulPage(id: { eq: $id }) {
			template
			title
			longText {
				longText
			}
			id
		}
	}
`;

export default Page;
