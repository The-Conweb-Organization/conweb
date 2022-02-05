import React from 'react';
import { graphql } from 'gatsby';
import HomeTemplate from '../templates/HomeTemplate';
import BlogTemplate from '../templates/BlogTemplate';
import ProjectsTemplate from '../templates/ProjectsTemplate';
import DefaultTemplate from '../templates/DefaultTemplate';
import SearchTemplate from '../templates/SearchTemplate';

const Page = ({ data: { contentfulPage } }) => {
	const { template } = contentfulPage;

	const getTemplate = template => {
		switch (template) {
			case 'home':
				return <HomeTemplate {...contentfulPage} />;

			case 'blog':
				return <BlogTemplate {...contentfulPage} />;

			case 'projects':
				return <ProjectsTemplate {...contentfulPage} />;

			case 'search':
				return <SearchTemplate {...contentfulPage} />;

			default:
				return <DefaultTemplate {...contentfulPage} />;
		}
	};

	return <>{getTemplate(template)}</>;
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
