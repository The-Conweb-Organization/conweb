import React, { useState, Fragment } from 'react';
import useBlogPage from '../hooks/useBlogPage';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLongArrowAltRight,
	faSlidersH
} from '@fortawesome/free-solid-svg-icons';
import Categories from '../components/blog/category/Categories';
import SectionContainer from '../components/ui/SectionContainer';
import Heading from '../components/ui/Heading';

const BlogTemplate = () => {
	const [showFiltering, setShowFiltering] = useState(false);

	const showFilteringHandler = () => {
		setShowFiltering(prevState => !prevState);
	};

	const { nodes } = useBlogPage();

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

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
				{nodes.map(
					({
						postId,
						blogTitle,
						blogAuthor: { authorName },
						blogCreatedAt,
						blogCategories,
						excerpt: { excerpt },
						blogFeaturedImage: {
							photographerUrl,
							photographer,
							imageFeatured,
							imageAltText
						},
						getPostPath
					}) => {
						const image = getImage(imageFeatured);
						return (
							<Fragment key={postId}>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6'>
									<div className='lg:col-span-2 w-full flex justify-center drop-shadow-md'>
										<figure className='border-2 border-conBlueGreen-700 h-fit w-full rounded-lg p-2 drop-shadow-md'>
											<GatsbyImage
												className='object-cover h-full w-full rounded-lg'
												image={image}
												alt={imageAltText}
											/>
											<figcaption className='pt-4 flex justify-center items-center hover:drop-shadow-md'>
												<p className='bg-conOrange-200 text-tail-900 text-center text-xs p-1.5 rounded'>
													Photo by{' '}
													<a
														href={photographerUrl}
														target='_blank'
														rel='noreferrer'
													>
														{photographer}
													</a>{' '}
													on{' '}
													<a href='https://unsplash.com/s/photos/tech?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
														Unsplash
													</a>
												</p>
											</figcaption>
										</figure>
									</div>
									<div className='lg:col-span-2 flex flex-col h-full bg-conBlueGreen-700 p-2 gap-4 drop-shadow-md rounded'>
										<h3 className='text-4xl md:text-2xl text-center text-conOrange-200 font-bold'>
											{blogTitle}
										</h3>
										<div className='flex justify-center'>
											<p className='border border-conOrange-200 text-conOrange-200 text-tail-900 text-xs py-0.5 px-1 rounded'>
												<span className='mt-auto'>{authorName}</span> |
												<span>published at {blogCreatedAt}</span>
											</p>
										</div>
										<ul className='flex justify-center w-full flex-wrap mt-12'>
											{blogCategories.map(({ categoryId, categoryName }) => (
												<Fragment key={categoryId}>
													<li className='bg-conOrange-200 text-center text-xs text-conBlueGreen-700 py-0.5 px-1 mt-2 mr-2 rounded'>
														{categoryName}
													</li>
												</Fragment>
											))}
										</ul>
									</div>
									<div className='sm:col-span-2 w-full'>
										<p className='text-tail-900 text-center p-1.5 rounded'>
											{excerpt}
										</p>
										<div className='flex justify-center w-full relative'>
											<button
												type='button'
												className='btn btn-block btn-outline btn-sm border-conBlueGreen-700 text-conBlueGreen-700 hover:bg-conBlue-700 hover:border-transparent hover:text-conOrange-200 md:w-fit'
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
			</div>
		</SectionContainer>
	);
};

export default BlogTemplate;
