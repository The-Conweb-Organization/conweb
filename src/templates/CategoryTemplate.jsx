import React from 'react';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import SectionContainer from '../components/ui/SectionContainer';
import ContentContainer from '../components/ui/ContentContainer';
import Heading from '../components/ui/Heading';
import BlogList from '../components/blog/BlogList';

const CategoryTemplate = ({ category: { categoryName, post } }) => {
	const filteredCategoryBlogPosts = post;

	return (
		<SectionContainer>
			<Heading headingType='h2'>
				<button
					type='button'
					className='btn bg-primary text-primary text-2xl w-fit'
					onClick={() => navigate(-1)}
				>
					<FontAwesomeIcon icon={faLongArrowAltLeft} />
					&ensp;Back
				</button>
				<span>Result for '{categoryName}' Category:</span>
			</Heading>
			<ContentContainer>
				<BlogList blogList={filteredCategoryBlogPosts} />
			</ContentContainer>
		</SectionContainer>
	);
};

export default CategoryTemplate;
