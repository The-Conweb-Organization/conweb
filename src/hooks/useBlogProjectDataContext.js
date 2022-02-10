import React, { createContext } from 'react';
import useBlogData from './useBlogData';
import useProjectData from './useProjectData';

export const BlogProjectDataContext = createContext({
	blogData: [],
	projectData: []
});

export const BlogProjectDataProvider = ({ children }) => {
	const { nodes: blogNodes } = useBlogData();
	const { nodes: projectNodes } = useProjectData();

	return (
		<BlogProjectDataContext.Provider
			value={{
				blogData: blogNodes,
				projectData: projectNodes
			}}
		>
			{children}
		</BlogProjectDataContext.Provider>
	);
};
