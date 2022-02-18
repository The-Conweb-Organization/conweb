import React, { useState, useContext } from 'react';
import { BlogProjectDataContext } from '../hooks/useBlogProjectDataContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';
import Categories from '../components/blog/category/Categories';
import SectionContainer from '../components/ui/SectionContainer';
import ContentContainer from '../components/ui/ContentContainer';
import Heading from '../components/ui/Heading';
import BlogList from '../components/blog/BlogList';
import { useShowFilter } from '../hooks/useMenuAndInfo';

const BlogTemplate = () => {
	const blogProjectDataCtx = useContext(BlogProjectDataContext);
	const { isShowFilter } = useShowFilter();
	const [showFiltering, setShowFiltering] = useState({ isShowFilter });

	const showFilteringHandler = () => {
		setShowFiltering(prevState => ({ ...prevState, isShowFilter: true }));
	};

	const hideFilteringHandler = () => {
		setShowFiltering(prevState => ({ ...prevState, isShowFilter: false }));
	};

	return (
		<SectionContainer>
			<Heading headingType='h2' isBlogPage={true}>
				<span className='col-span-3'>All or filtered blog articles</span>
				<button
					onClick={
						!showFiltering.isShowFilter
							? showFilteringHandler
							: hideFilteringHandler
					}
					type='button'
					className='btn bg-secondary hover:bg-hover text-primary text-2xl w-fit justify-self-end'
				>
					<FontAwesomeIcon icon={faSlidersH} />
				</button>
			</Heading>
			{showFiltering.isShowFilter && <Categories />}

			<ContentContainer>
				<BlogList blogList={blogProjectDataCtx.blogData} />
			</ContentContainer>
		</SectionContainer>
	);
};

export default BlogTemplate;
