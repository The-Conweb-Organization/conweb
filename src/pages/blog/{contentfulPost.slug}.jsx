import React from 'react';
import { graphql } from 'gatsby';
import PostTemplate from '../../templates/PostTemplate';

const Post = ({ data: { contentfulPost } }) => {
	return <PostTemplate blogPost={contentfulPost} />;
};

export default Post;

export const query = graphql`
	query ($slug: String) {
		contentfulPost(slug: { eq: $slug }) {
			blogTitle
			slug
			blogCategories {
				categoryName
				categoryId: id
			}
			blogCreatedAt
			blogAuthor {
				authorName
			}
			blogFeaturedImage {
				photographerUrl
				photographer
				imageFeatured {
					gatsbyImageData(width: 1000)
				}
				imageAltText
			}
			excerpt {
				excerpt
			}
			blogContent {
				raw
				references {
					... on ContentfulCode {
						contentful_id
						codeTitle
						codeBlock {
							codeBlock
						}
						codeLanguage
						__typename
					}
				}
			}
			blogId: id
		}
	}
`;
