import React, { Fragment } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { navigate } from 'gatsby';

const PostTemplate = ({ blogPost }) => {
	const image = getImage(blogPost.blogFeaturedImage.imageFeatured);

	return (
		<>
			<section>
				<div className='mx-auto px-4 md:px-12 pt-12'>
					<h1 className='text-7xl text-conOrange-200 text-center font-black'>
						<button
							type='button'
							className='btn bg-conBlueGreen-700 text-conOrange-200 text-2xl w-fit justify-self-end'
							onClick={() => navigate(-1)}
						>
							<i className='fas fa-long-arrow-alt-left'></i>&emsp;Back
						</button>
						<span className='col-span-3'>{blogPost.blogTitle}</span>
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
								<h2 className='mb-6 text-conOrange-200 text-5xl'>
									First headline of post one
								</h2>

								<p className='font-bold mb-6'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. In
									quo, obcaecati ut quod perspiciatis voluptatibus asperiores
									nesciunt repudiandae officiis quisquam quam rem maxime quasi
									quibusdam fugit id distinctio aspernatur. Blanditiis deserunt
									quaerat quod doloribus et voluptas quas quam perferendis
									voluptatibus, iusto excepturi tenetur ipsam animi itaque
									aspernatur perspiciatis neque optio provident vero veniam quos
									ex! Deserunt quasi enim magnam quis necessitatibus
									perspiciatis nihil, distinctio rem ipsa ipsam reiciendis?
									Exercitationem, temporibus ea fugit consequatur corrupti
									eligendi excepturi veritatis cumque quod aut!
								</p>

								<div>
									<h3 className='text-conH2'>First headline of headline one</h3>
									<h3 className='text-4xl md:text-2xl'>
										Second headline of headline one
									</h3>
									<h3 className='text-3xl'>Third headline of headline one</h3>
									<h2 className='mb-6 text-conOrange-200 text-5xl'>
										Second headline of post one
									</h2>
									<h3 className='text-4xl md:text-2xl'>
										First headline of headline two
									</h3>
									<h3 className='text-4xl md:text-2xl'>
										Second headline of headline two
									</h3>
									<h3 className='text-4xl md:text-2xl'>
										Third headline of headline two
									</h3>
									<h2 className='mb-6 text-conOrange-200 text-5xl'>
										Third headline of post one
									</h2>
									<h3 className='text-4xl md:text-2xl'>
										First headline of headline three
									</h3>
									<h3 className='text-4xl md:text-2xl'>
										Second headline of headline three
									</h3>
									<h3 className='text-4xl md:text-2xl'>
										Third headline of headline three
									</h3>
								</div>
								<div>Summary</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PostTemplate;
