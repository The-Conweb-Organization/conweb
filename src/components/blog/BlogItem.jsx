import React, { Fragment } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';
import { useLocation } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const BlogItem = ({ blogItem, isTopFiveArticles }) => {
	const { pathname } = useLocation();

	const {
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
	} = blogItem;
	const image = getImage(imageFeatured);

	let postContent;

	if (
		(pathname.startsWith('/blog') && !pathname.startsWith('/blog/post')) ||
		pathname.startsWith('/blog/category/') ||
		pathname.startsWith('/search')
	) {
		postContent = (
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6'>
				<div className='lg:col-span-2 w-full drop-shadow-md'>
					<figure className='border-2 border-primary h-fit w-full rounded-lg p-2 drop-shadow-md'>
						<GatsbyImage
							className='object-cover rounded-lg'
							image={image}
							alt={imageAltText}
						/>
						<figcaption className='pt-4 flex justify-center items-center hover:drop-shadow-md'>
							<p className='bg-secondary text-primary text-center text-xs font-bold p-1.5 rounded'>
								Photo by{' '}
								<a href={photographerUrl} target='_blank' rel='noreferrer'>
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
				<div className='lg:col-span-2 flex flex-col h-full bg-primary p-2 gap-4 drop-shadow-md rounded'>
					<h3 className='text-4xl md:text-2xl text-center text-secondary font-bold'>
						{blogTitle}
					</h3>
					<div className='flex justify-center'>
						<p className='text-secondary text-xs py-0.5 px-1 rounded'>
							<span className='mt-auto'>{authorName}</span> -{' '}
							<span>published at {blogCreatedAt}</span>
						</p>
					</div>
					<ul className='flex justify-center w-full flex-wrap mt-12'>
						{blogCategories.map(({ categoryId, categoryName }) => (
							<Fragment key={categoryId}>
								<li className='bg-secondary text-center text-xs text-primary py-0.5 px-1 mt-2 mr-2 rounded'>
									{categoryName}
								</li>
							</Fragment>
						))}
					</ul>
				</div>
				<div className='sm:col-span-2 w-full'>
					<p className='text-conPara text-paragraph text-center h-24 p-1.5 rounded line-clamp-4'>
						{excerpt}
					</p>
					<div className='flex justify-center w-full relative mt-4'>
						<button
							type='button'
							className='btn btn-block btn-outline btn-sm border-secondary text-secondary hover:bg-secondary hover:border-transparent hover:text-primary md:w-fit'
							onClick={() => navigate(getPostPath)}
						>
							Read More&emsp;
							<FontAwesomeIcon icon={faLongArrowAltRight} />
						</button>
					</div>
				</div>
			</div>
		);
	} else {
		postContent = (
			<>
				<div
					className={`flex col-span-2 md:col-span-1 justify-self-center drop-shadow-md w-full  ${
						isTopFiveArticles && 'md:w-1/2'
					}`}
				>
					<figure className='border-2 border-primary h-fit w-fit rounded-lg p-2 drop-shadow-md'>
						<GatsbyImage
							className={`object-cover ${
								isTopFiveArticles && 'h-40'
							} rounded-lg`}
							image={image}
							alt={imageAltText}
						/>
						<figcaption className='pt-4 flex justify-center items-center hover:drop-shadow-md'>
							<p className='bg-secondary text-primary text-center font-bold text-xs p-1.5 rounded'>
								Photo by{' '}
								<a href={photographerUrl} target='_blank' rel='noreferrer'>
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
				<div
					className={`flex flex-col col-span-2 md:col-span-1 h-full ${
						!isTopFiveArticles && 'justify-center'
					} bg-primary p-2 gap-4 drop-shadow-md rounded`}
				>
					<h3 className='text-4xl md:text-2xl text-center text-secondary font-bold'>
						{blogTitle}
					</h3>
					<div className='flex justify-center'>
						<p className='border border-secondary text-secondary text-xs py-0.5 px-1 rounded'>
							<span className='mt-auto'>{authorName}</span> -{' '}
							<span>published at {blogCreatedAt}</span>
						</p>
					</div>
					<ul
						className={`flex justify-center w-full flex-wrap ${
							!isTopFiveArticles ? 'mt-12' : ''
						}`}
					>
						{blogCategories.map(({ categoryId, categoryName }) => (
							<Fragment key={categoryId}>
								<li className='bg-secondary text-center text-xs text-primary font-bold py-0.5 px-1 mt-2 mr-2 rounded'>
									{categoryName}
								</li>
							</Fragment>
						))}
					</ul>
					{isTopFiveArticles && (
						<div className='flex justify-center w-full'>
							<button
								type='button'
								className='btn btn-block btn-outline btn-sm border-secondary text-secondary hover:bg-secondary hover:border-transparent hover:text-primary md:w-fit'
								onClick={() => navigate(getPostPath)}
							>
								Read More&emsp;
								<FontAwesomeIcon icon={faLongArrowAltRight} />
							</button>
						</div>
					)}
				</div>
				{!isTopFiveArticles && (
					<div className=' w-full md:w-1/2 col-span-2 justify-self-center'>
						<p className='text-paragraph text-center p-1.5 rounded'>
							{excerpt}
						</p>

						<div className='flex justify-center w-full relative'>
							<button
								type='button'
								className='btn btn-block btn-outline btn-sm border-secondary text-secondary hover:bg-secondary hover:border-transparent hover:text-primary md:w-fit'
								onClick={() => navigate(getPostPath)}
							>
								Read More&emsp;
								<FontAwesomeIcon icon={faLongArrowAltRight} />
							</button>
						</div>
					</div>
				)}
			</>
		);
	}

	return (
		<>
			<Fragment key={postId}>{postContent}</Fragment>
		</>
	);
};

export default BlogItem;
