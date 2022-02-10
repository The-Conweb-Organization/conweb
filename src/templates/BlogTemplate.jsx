import React, { useState, useContext } from 'react';
import { BlogProjectDataContext } from '../hooks/useBlogProjectDataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import Categories from '../components/blog/category/Categories';
import SectionContainer from '../components/ui/SectionContainer';
import ContentContainer from '../components/ui/ContentContainer';
import Heading from '../components/ui/Heading';
import BlogList from '../components/blog/BlogList';

const BlogTemplate = () => {
	const blogProjectDataCtx = useContext(BlogProjectDataContext);
	const [showFiltering, setShowFiltering] = useState(false);

	const showFilteringHandler = () => {
		setShowFiltering(prevState => !prevState);
	};

	return (
		<SectionContainer>
			<Heading headingType='h2'>
				<span className='col-span-3'>All or filtered blog articles</span>
				<button
					onClick={showFilteringHandler}
					type='button'
					className='btn bg-conBlueGreen-700 text-conOrange-200 text-2xl w-fit justify-self-end'
				>
					<FontAwesomeIcon icon={faSlidersH} />
				</button>
			</Heading>
			{showFiltering && <Categories />}

			<ContentContainer>
				<BlogList blogList={blogProjectDataCtx.blogData} />
			</ContentContainer>
		</SectionContainer>
	);
};

export default BlogTemplate;
