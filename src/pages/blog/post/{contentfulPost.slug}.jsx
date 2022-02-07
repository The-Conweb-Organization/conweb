import React from 'react';

import { graphql } from 'gatsby';
import PostTemplate from '../../../templates/PostTemplate';

const Post = ({ data: { contentfulPost } }) => {
	return <PostTemplate blogPost={contentfulPost} />;
};

export default Post;

export const query = graphql`
	query ($slug: String) {
		contentfulPost(slug: { eq: $slug }) {
			...BlogData
		}
	}
`;
