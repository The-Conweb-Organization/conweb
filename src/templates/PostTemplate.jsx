import React, { /* useState, useEffect, */ Fragment } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';
import RichTextRendering from '../components/blog/RichTextRendering';
import RichTextToc from '../components/blog/RichTextToc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import StickyBox from 'react-sticky-box';
import SectionContainer from '../components/ui/SectionContainer';
import ContentContainer from '../components/ui/ContentContainer';
import Heading from '../components/ui/Heading';

const PostTemplate = ({ blogPost }) => {
	// const [saveEntry, setSaveEntry] = useState({});
	const image = getImage(blogPost.blogFeaturedImage.imageFeatured);

	// const onObserveCallbackHandler = entry => {
	// 	setSaveEntry(prevItem => ({
	// 		...prevItem,
	// 		entry
	// 	}));
	// };

	// console.log(saveEntry);

	return (
		<SectionContainer>
			<Heading headingType='h1'>
				<button
					type='button'
					className='btn btn-sm bg-secondary text-primary border-transparent hover:bg-hover hover:border-transparent text-2xl w-fit'
					onClick={() => navigate(-1)}
				>
					<FontAwesomeIcon icon={faLongArrowAltLeft} />
					&ensp;Back
				</button>
				<span>{blogPost.blogTitle}</span>
			</Heading>
			<div className='flex justify-center'>
				<p className='border border-secondary text-secondary text-xs py-0.5 px-1 rounded mb-6'>
					<span className='mt-auto'>{blogPost.blogAuthor.authorName}</span> -{' '}
					<span>published at {blogPost.blogCreatedAt}</span>
				</p>
			</div>
			<ContentContainer>
				<div className='col-span-2 hidden sm:block'>
					<StickyBox
						offsetTop={50}
						className='border-2 border-secondary rounded p-6'
					>
						<h3 className='text-conH3 text-secondary text-center font-bold pt-6'>
							Table of contents
							{blogPost.blogContent !== null && (
								<div className='bg-secondary py-6 mt-6 rounded-lg min-h-fit'>
									<RichTextToc blogContent={blogPost.blogContent} />
								</div>
							)}
						</h3>
					</StickyBox>
				</div>

				<div className='col-span-4 border-2 border-secondary rounded'>
					<figure className='p-2 drop-shadow-md'>
						<GatsbyImage
							className='object-cover h-96 w-full rounded-lg'
							image={image}
							alt={blogPost.blogFeaturedImage.imageAltText}
						/>
						<figcaption className='pt-4 flex justify-center items-center hover:drop-shadow-md'>
							<p className='bg-secondary text-primary text-center font-bold p-1.5 rounded'>
								Photo by{' '}
								<a
									href={blogPost.blogFeaturedImage.photographerUrl}
									target='_blank'
									rel='noreferrer'
								>
									{blogPost.blogFeaturedImage.photographer}
								</a>{' '}
								on{' '}
								<a href='https://unsplash.com/s/photos/tech?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
									Unsplash
								</a>
							</p>
						</figcaption>
					</figure>
					<div className='bg-primary drop-shadow-md rounded m-2'>
						<ul className='flex justify-center items-center flex-wrap my-4 mb-2'>
							{blogPost.blogCategories.map(({ categoryId, categoryName }) => (
								<Fragment key={categoryId}>
									<li className='bg-secondary text-center text-xs text-primary font-bold py-0.5 px-1 mr-2 mb-2 md:mb-0 rounded'>
										{categoryName}
									</li>
								</Fragment>
							))}
						</ul>
					</div>
					<div className='mx-2 mt-12'>
						<p className='text-conPara text-accent font-bold'>
							{blogPost.excerpt.excerpt}
						</p>
						{blogPost.blogContent !== null && (
							<RichTextRendering
								blogContent={blogPost.blogContent}
								// onObserveCallback={onObserveCallbackHandler}
							/>
						)}
					</div>
				</div>
			</ContentContainer>
		</SectionContainer>
	);
};

export default PostTemplate;
