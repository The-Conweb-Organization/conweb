import React, { useContext } from 'react';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { BlogProjectDataContext } from '../hooks/useBlogProjectDataContext';
import SectionContainer from '../components/ui/SectionContainer';
import ContentContainer from '../components/ui/ContentContainer';
import Heading from '../components/ui/Heading';
import BlogList from '../components/blog/BlogList';
import ProjectList from '../components/project/ProjectList';

const HomeTemplate = () => {
	const blogProjectDataCtx = useContext(BlogProjectDataContext);

	return (
		<>
			<SectionContainer>
				<Heading headingType='h2'>Most recent blog article</Heading>
				<ContentContainer>
					<BlogList blogList={blogProjectDataCtx.blogData.slice(0, 1)} />
				</ContentContainer>
			</SectionContainer>

			<SectionContainer>
				<Heading headingType='h2'>Top 5 recent blog articles</Heading>
				<ContentContainer>
					<BlogList
						isTopFiveArticles={true}
						blogList={blogProjectDataCtx.blogData.slice(1, 6)}
					/>

					<div className='my-12 flex justify-center md:col-span-2'>
						<button
							type='button'
							onClick={() => navigate('/blog')}
							className='btn btn-primary bg-secondary hover:bg-hover border-transparent hover:border-transparent text-primary'
						>
							See all blog articles&emsp;
							<FontAwesomeIcon
								icon={faLongArrowAltRight}
								className='text-primary'
							/>
						</button>
					</div>
				</ContentContainer>
			</SectionContainer>
			<SectionContainer>
				<Heading headingType='h2'>Most recent project</Heading>
				<ContentContainer>
					<ProjectList
						projectList={blogProjectDataCtx.projectData.slice(0, 1)}
					/>
				</ContentContainer>
			</SectionContainer>

			<SectionContainer>
				<Heading headingType='h2'>Top 5 recent projects</Heading>
				<ContentContainer>
					<ProjectList
						isTopFiveArticles={true}
						projectList={blogProjectDataCtx.projectData.slice(1, 6)}
					/>
					<div className='my-12 flex justify-center md:col-span-2'>
						<button
							type='button'
							onClick={() => navigate('/projects')}
							className='btn btn-primary bg-secondary hover:bg-hover border-transparent hover:border-transparent text-primary'
						>
							See all projects&emsp;
							<FontAwesomeIcon
								icon={faLongArrowAltRight}
								className='text-primary'
							/>
						</button>
					</div>
				</ContentContainer>
			</SectionContainer>
		</>
	);
};

export default HomeTemplate;
