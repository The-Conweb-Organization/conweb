import React, { useContext, Fragment } from 'react';
import { SearchQueryContext } from '../hooks/useSearchQueryContext';
import { useFlexSearch } from 'react-use-flexsearch';
import useSearchTemplate from '../hooks/useSearchTemplate';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLongArrowAltRight,
	faLongArrowAltLeft
} from '@fortawesome/free-solid-svg-icons';
import SectionContainer from '../components/ui/SectionContainer';
import ContentContainer from '../components/ui/SectionContainer';
import Heading from '../components/ui/Heading';

const SearchTemplate = () => {
	const { index, store } = useSearchTemplate();

	const searchQueryCtx = useContext(SearchQueryContext);
	const results = useFlexSearch(searchQueryCtx.query, index, store);

	return (
		<SectionContainer>
			<Heading headingType='h2'>
				<button
					type='button'
					className='btn bg-primary text-secondary text-2xl w-fit'
					onClick={() => navigate(-1)}
				>
					<FontAwesomeIcon icon={faLongArrowAltLeft} />
					&ensp;Back
				</button>
				<span>
					{results.length === 0
						? `No Search Results for '${searchQueryCtx.query}' found`
						: `Search results for: ${searchQueryCtx.query}`}
				</span>
			</Heading>
			<ContentContainer>
				{results.map(
					({
						id: postId,
						blogTitle,
						blogCategories,
						excerpt: { excerpt },
						gatsbyPath: getPostPath
					}) => {
						return (
							<Fragment key={postId}>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6'>
									<div className='lg:col-span-2 flex flex-col h-full bg-primary p-2 gap-4 drop-shadow-md rounded'>
										<h3 className='text-4xl md:text-2xl text-center text-secondary font-bold'>
											{blogTitle}
										</h3>
										<ul className='flex justify-center w-full flex-wrap mt-12'>
											{blogCategories.map(
												({ id: categoryId, categoryName }) => (
													<Fragment key={categoryId}>
														<li className='bg-secondary text-center text-xs text-primary font-bold py-0.5 px-1 mt-2 mr-2 rounded'>
															{categoryName}
														</li>
													</Fragment>
												)
											)}
										</ul>
									</div>
									<div className='sm:col-span-2 w-full'>
										{/* <p className='text-tail-900 text-center p-1.5 rounded'>
												{excerpt}
											</p> */}
										<div className='flex justify-center w-full relative'>
											<button
												type='button'
												className='btn btn-block btn-outline btn-sm border-secondary text-secondary hover:bg-conBlue-700 hover:border-transparent hover:text-primary md:w-fit'
												onClick={() => navigate(getPostPath)}
											>
												Read More&emsp;
												<FontAwesomeIcon icon={faLongArrowAltRight} />
											</button>
										</div>
									</div>
								</div>
							</Fragment>
						);
					}
				)}
			</ContentContainer>
		</SectionContainer>
	);
};

export default SearchTemplate;
