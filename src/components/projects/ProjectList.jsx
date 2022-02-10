import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = ({ projectList, isTopFiveArticles }) => {
	return (
		<>
			{projectList &&
				projectList.map(projectItem => (
					<ProjectItem
						key={projectItem.projectId}
						projectItem={projectItem}
						isTopFiveArticles={isTopFiveArticles}
					/>
				))}
		</>
	);
};

export default ProjectList;
