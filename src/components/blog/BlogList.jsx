import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogList }) => {
	return (
		<>
			{blogList.map(blogItem => (
				<BlogItem key={blogItem.postId} blogItem={blogItem} />
			))}
		</>
	);
};

export default BlogList;
