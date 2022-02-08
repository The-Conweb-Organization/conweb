import React, { useContext, Fragment } from 'react';
import { BlogDataContext } from '../hooks/useBlogDataContext';
import SectionContainer from '../components/ui/SectionContainer';
import ContentContainer from '../components/ui/ContentContainer';
import Heading from '../components/ui/Heading';
import BlogList from '../components/blog/BlogList';

const HomeTemplate = () => {
	const blogDataCtx = useContext(BlogDataContext);

	return (
		<>
			<SectionContainer>
				<Heading headingType='h2'>Most recent blog article</Heading>
				<ContentContainer>
					<BlogList blogList={blogDataCtx.blogData.slice(0, 1)} />
				</ContentContainer>
			</SectionContainer>

			<SectionContainer>
				<h2 className='text-center text-conOrange-200 font-bold text-5xl'>
					Top 5 recent blog articles
				</h2>
				<ContentContainer>
					<BlogList
						isTopFiveArticles={true}
						blogList={blogDataCtx.blogData.slice(1, 6)}
					/>

					<div className='my-12 flex justify-center'>
						<button
							type='button'
							className='btn btn-primary bg-conOrange-200 hover:bg-conOrange-300 border-transparent hover:border-transparent text-conBlueGreen-700'
						>
							See all blog articles&emsp;
							<i className='fas fa-long-arrow-alt-right'></i>
						</button>
					</div>
				</ContentContainer>
			</SectionContainer>
			<SectionContainer>
				<h2 className='text-center text-conOrange-200 font-bold text-conH2'>
					Most recent project
				</h2>
			</SectionContainer>

			<SectionContainer>
				<h2 className='text-center text-conOrange-200 font-bold text-conH2'>
					Top 5 recent projects
				</h2>
			</SectionContainer>
		</>
	);
};

export default HomeTemplate;
