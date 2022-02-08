import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogList, isTopFiveArticles }) => {
	return (
		<>
			{blogList.map(blogItem => (
				<BlogItem
					key={blogItem.postId}
					blogItem={blogItem}
					isTopFiveArticles={isTopFiveArticles}
				/>
			))}
		</>
	);
};

export default BlogList;
