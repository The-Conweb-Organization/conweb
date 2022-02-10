import React, { useContext } from 'react';
import { navigate } from 'gatsby';
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
				<h2 className='text-center text-conOrange-200 font-bold text-5xl'>
					Top 5 recent blog articles
				</h2>
				<ContentContainer>
					<BlogList
						isTopFiveArticles={true}
						blogList={blogProjectDataCtx.blogData.slice(1, 6)}
					/>

					<div className='my-12 flex justify-center md:col-span-2'>
						<button
							type='button'
							onClick={() => navigate('/blog')}
							className='btn btn-primary bg-conOrange-200 hover:bg-conOrange-300 border-transparent hover:border-transparent text-conBlueGreen-700'
						>
							See all blog articles&emsp;
							<i className='fas fa-long-arrow-alt-right'></i>
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
				<h2 className='text-center text-conOrange-200 font-bold text-5xl'>
					Top 5 recent projects
				</h2>
				<ContentContainer>
					<ProjectList
						isTopFiveArticles={true}
						projectList={blogProjectDataCtx.projectData.slice(1, 6)}
					/>
					<div className='my-12 flex justify-center md:col-span-2'>
						<button
							type='button'
							onClick={() => navigate('/projects')}
							className='btn btn-primary bg-conOrange-200 hover:bg-conOrange-300 border-transparent hover:border-transparent text-conBlueGreen-700'
						>
							See all projects&emsp;
							<i className='fas fa-long-arrow-alt-right'></i>
						</button>
					</div>
				</ContentContainer>
			</SectionContainer>
		</>
	);
};

export default HomeTemplate;
