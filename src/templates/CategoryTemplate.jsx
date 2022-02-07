import React, { useContext } from 'react';
import { BlogDataContext } from '../hooks/useBlogDataContext';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import SectionContainer from '../components/ui/SectionContainer';
import ContentContainer from '../components/ui/ContentContainer';
import Heading from '../components/ui/Heading';
import BlogList from '../components/blog/BlogList';

const CategoryTemplate = ({ categoryBlogPosts }) => {
	const blogDataCtx = useContext(BlogDataContext);
	return (
		<SectionContainer>
			<Heading headingType='h2'>
				<button
					type='button'
					className='btn bg-conBlueGreen-700 text-conOrange-200 text-2xl w-fit'
					onClick={() => navigate(-1)}
				>
					<FontAwesomeIcon icon={faLongArrowAltLeft} />
					&ensp;Back
				</button>
				<span>Result for '{categoryBlogPosts.categoryName}' Category:</span>
			</Heading>
			<ContentContainer>
				<BlogList blogList={blogDataCtx.blogData} />
			</ContentContainer>
		</SectionContainer>
	);
};

export default CategoryTemplate;
