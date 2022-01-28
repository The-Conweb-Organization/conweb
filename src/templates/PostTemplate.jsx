import React, { Fragment } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';
import RichTextRendering from '../components/blog/RichTextRendering';
import RichTextToc from '../components/blog/RichTextToc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

const PostTemplate = ({ blogPost }) => {
	const image = getImage(blogPost.blogFeaturedImage.imageFeatured);

	return (
		<>
			<section>
				<div className='mx-auto px-4 md:px-12 pt-12'>
					<h1 className='text-conH1 flex justify-between items-center text-conOrange-200 text-center font-black'>
						<button
							type='button'
							className='btn bg-conBlueGreen-700 text-conOrange-200 text-2xl w-fit'
							onClick={() => navigate(-1)}
						>
							<FontAwesomeIcon icon={faLongArrowAltLeft} />
							&ensp;Back
						</button>
						<span>{blogPost.blogTitle}</span>
					</h1>
					<div className='flex justify-center'>
						<p className='border border-conOrange-200 text-conOrange-200 text-tail-900 text-xs py-0.5 px-1 rounded'>
							<span className='mt-auto'>{blogPost.blogAuthor.authorName}</span>{' '}
							|<span>published at {blogPost.blogCreatedAt}</span>
						</p>
					</div>
					<div className='sm:grid sm:grid-cols-6 gap-x-4'>
						<div className='col-span-2 hidden sm:block bg-conOrange-200 h-full rounded'>
							<h3 className='text-4xl md:text-2xl text-conBlueGreen-700 text-center font-bold'>
								Table of contents
								<RichTextToc blogContent={blogPost.blogContent} />
							</h3>
						</div>
						<div className='col-span-4 border-2 border-conBlueGreen-700 rounded'>
							<figure className='p-2 drop-shadow-md'>
								<GatsbyImage
									className='object-cover h-96 w-full rounded-lg'
									image={image}
									alt={blogPost.blogFeaturedImage.imageAltText}
								/>
								<figcaption className='pt-4 flex justify-center items-center hover:drop-shadow-md'>
									<p className='bg-conOrange-200 text-tail-900 text-center p-1.5 rounded'>
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
							<div className='bg-conBlueGreen-700 drop-shadow-md rounded m-2'>
								<ul className='flex justify-center items-center flex-wrap my-4 mb-2'>
									{blogPost.blogCategories.map(
										({ categoryId, categoryName }) => (
											<Fragment key={categoryId}>
												<li className='bg-conOrange-200 text-center text-xs text-conBlueGreen-700 py-0.5 px-1 mr-2 mb-2 md:mb-0 rounded'>
													{categoryName}
												</li>
											</Fragment>
										)
									)}
								</ul>
							</div>
							<div className='mx-2 mt-12'>
								<p className='font-bold'>{blogPost.excerpt.excerpt}</p>
								<RichTextRendering blogContent={blogPost.blogContent} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PostTemplate;
