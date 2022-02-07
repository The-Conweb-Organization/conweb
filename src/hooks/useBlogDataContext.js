import React, { createContext } from 'react';
import useBlogData from './useBlogData';

export const BlogDataContext = createContext({
	blogData: []
});

export const BlogDataProvider = ({ children }) => {
	const { nodes } = useBlogData();

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
