import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useSearchTemplate = () => {
	const {
		allContentfulPost: { nodes }
	} = useStaticQuery(graphql`
		{
			allContentfulPost {
				nodes {
					blogTitle
					blogCategories {
						categoryName
						id
					}
					excerpt {
						excerpt
					}
					id
					gatsbyPath(filePath: "/blog/{contentfulPost.slug}")
				}
			}
		}
	`);

	return { nodes };
};

export default useSearchTemplate;
