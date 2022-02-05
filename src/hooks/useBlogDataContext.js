import React, { useState, useEffect, createContext } from 'react';
import useBlogData from './useBlogData';

export const BlogDataContext = createContext({
	blogData: []
});

export const BlogDataProvider = ({ children }) => {
	const { nodes } = useBlogData();
	// const [blogData, setBlogData] = useState([]);

	// useEffect(() => {
	// 	if (nodes) {
	// 		setBlogData(prevState => {
	// 			return [...prevState, nodes];
	// 		});
	// 	}
	// }, [nodes]);

	return (
		<BlogDataContext.Provider
			value={{
				blogData: nodes
			}}
		>
			{children}
		</BlogDataContext.Provider>
	);
};
