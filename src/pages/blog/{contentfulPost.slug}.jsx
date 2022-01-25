import React from 'react';
import { graphql } from 'gatsby';
// import RichTextRendering from '../../components/blog/RichTextRendering';
import PostTemplate from '../../templates/PostTemplate';

const Post = ({ data: { contentfulPost } }) => {
	return <PostTemplate blogPost={contentfulPost} />;
	// return <RichTextRendering blogContent={blogContent} />;
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
			blogContent {
				raw
			}
			blogId: id
		}
	}
`;
