import React from 'react';

import { graphql } from 'gatsby';
import CategoryTemplate from '../../../templates/CategoryTemplate';

const CategoryPage = ({ data: { contentfulCategory } }) => {
	return <CategoryTemplate categoryBlogPosts={contentfulCategory} />;
};

export default CategoryPage;

export const query = graphql`
	query ($id: String) {
		contentfulCategory(id: { eq: $id }) {
			categoryName
			post {
				blogAuthor {
					authorName
				}
				blogCategories {
					categoryName
					categoryId: id
				}
				blogTitle
				postId: id
				blogFeaturedImage {
					imageFeatured {
						gatsbyImageData(height: 500, width: 1000, quality: 90)
					}
					photographer
					photographerUrl
					imageAltText
				}
				excerpt {
					excerpt
				}
				getPostPath: gatsbyPath(filePath: "/blog/{contentfulPost.slug}")
			}
		}
	}
`;
