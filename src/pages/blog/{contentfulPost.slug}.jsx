import React from 'react';
import { graphql } from 'gatsby';
import RichTextRendering from '../../components/blog/RichTextRendering';

const Post = ({
	data: {
		contentfulPost: { blogContent }
	}
}) => {
	return <RichTextRendering blogContent={blogContent} />;
};

export default Post;

export const query = graphql`
	query ($slug: String) {
		contentfulPost(slug: { eq: $slug }) {
			blogTitle
			slug
			blogCategories {
				categoryName
			}
			blogCreatedAt
			blogContent {
				raw
			}
		}
	}
`;
