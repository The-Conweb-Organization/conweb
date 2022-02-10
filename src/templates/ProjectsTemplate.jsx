import React, { useContext } from 'react';
import { BlogProjectDataContext } from '../hooks/useBlogProjectDataContext';
import SectionContainer from '../components/ui/SectionContainer';
import ContentContainer from '../components/ui/ContentContainer';
import Heading from '../components/ui/Heading';
import ProjectList from '../components/project/ProjectList';

const ProjectTemplate = () => {
	const blogProjectDataCtx = useContext(BlogProjectDataContext);

	return (
		<SectionContainer>
			<Heading headingType='h2'>
				<span className='col-span-3'>All projects</span>
			</Heading>

			<ContentContainer>
				<ProjectList projectList={blogProjectDataCtx.projectData} />
			</ContentContainer>
		</SectionContainer>
	);
};

export default ProjectTemplate;
