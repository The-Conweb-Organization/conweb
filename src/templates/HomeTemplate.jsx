import React, { Fragment } from 'react';
import useHomeTemplate from '../hooks/useHomeTemplate';
import { navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const HomeTemplate = () => {
	const { nodes } = useHomeTemplate();

	return (
		<>
			<section>
				<div className='mx-auto px-4 md:px-12 pt-12'>
					<h2 className='text-center text-conOrange-200 font-bold text-conH2'>
						Most recent blog article
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:border-2 border-conBlueGreen-700 md:p-4 mt-12 rounded-lg'>
						<div className='w-full flex justify-center drop-shadow-md'>
							<figure className='border-2 border-conBlueGreen-700 h-fit w-full rounded-lg p-2 drop-shadow-md'>
								{nodes
									.slice(0, 1)
									.map(
										({
											id: imageId,
											blogFeaturedImage: { imageFeatured, imageAltText }
										}) => {
											const image = getImage(imageFeatured);
											return (
												<GatsbyImage
													key={imageId}
													className='object-cover h-60 md:h-96 w-full rounded-lg'
													image={image}
													alt={imageAltText}
												/>
											);
										}
									)}

								<figcaption className='pt-4 flex justify-center items-center hover:drop-shadow-md'>
									<p className='bg-conOrange-200 text-tail-900 text-center p-1.5 rounded'>
										Photo by{' '}
										<a
											href={nodes[0].blogFeaturedImage.photographerUrl}
											target='_blank'
											rel='noreferrer'
										>
											{nodes[0].blogFeaturedImage.photographer}
										</a>{' '}
										on{' '}
										<a href='https://unsplash.com/s/photos/tech?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
											Unsplash
										</a>
									</p>
								</figcaption>
							</figure>
						</div>
						<div className='flex flex-col h-fit bg-conBlueGreen-700 p-2 gap-4 drop-shadow-md rounded'>
							<h3 className='text-4xl text-center text-conOrange-200 font-bold'>
								{nodes[0].blogTitle}
							</h3>
							<div className='flex justify-center'>
								<p className='border border-conOrange-200 text-conOrange-200 text-tail-900 text-xs py-0.5 px-1 rounded'>
									<span className='mt-auto'>
										{nodes[0].blogAuthor.authorName}
									</span>{' '}
									|<span>published at {nodes[0].blogCreatedAt}</span>
								</p>
							</div>
							<ul className='flex justify-center w-full flex-wrap mt-12'>
								{nodes[0].blogCategories.map(({ categoryName, id }) => (
									<Fragment key={id}>
										<li className='bg-conOrange-200 text-center text-xs text-conBlueGreen-700 py-0.5 px-1 mt-2 mr-2 rounded'>
											{categoryName}
										</li>
									</Fragment>
								))}
							</ul>
						</div>

						<div className='w-full'>
							<div className='text-teal-900 p-1.5 rounded'>
								{nodes[0].excerpt.excerpt}
							</div>
						</div>
						<div className='flex justify-center w-full relative'>
							<button
								type='button'
								className='btn btn-block btn-outline border-conBlueGreen-700 text-conBlueGreen-700 hover:bg-conBlue-700 hover:border-transparent hover:text-conOrange-200 md:absolute md:bottom-0 md:right-0 md:w-fit'
								onClick={() => navigate(nodes[0].getPostPath)}
							>
								Read More&emsp;<i className='fas fa-long-arrow-alt-right'></i>
							</button>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='mx-auto px-4 md:px-12 mt-12'>
					<h2 className='text-center text-conOrange-200 font-bold text-5xl'>
						Top 5 recent blog articles
					</h2>
					<ul className='mt-12'>
						{nodes
							.slice(1)
							.map(
								({
									id: postId,
									blogTitle,
									blogCreatedAt,
									blogAuthor,
									blogCategories,
									getPostPath,
									blogFeaturedImage: {
										photographerUrl,
										photographer,
										imageFeatured,
										imageAltText
									}
								}) => {
									const image = getImage(imageFeatured);

									return (
										<Fragment key={postId}>
											<li className='border-2 border-conBlueGreen-700 rounded mb-4 md:ml-72 p-2 md:p-4'>
												<div className='grid grid-cols-1 gap-8 sm:gap-0 sm:grid-cols-2'>
													<div className='flex justify-center drop-shadow-md sm:w-fit'>
														<figure className='border-2 border-conBlueGreen-700 h-fit w-fit rounded-lg p-1 drop-shadow-md'>
															<GatsbyImage
																className='object-cover h-40 w-full rounded-lg'
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
													<div className='flex flex-col justify-center items-center'>
														<h3 className='text-4xl text-center text-conOrange-200 font-bold'>
															{blogTitle}
														</h3>
														<p className='border-2 border-conOrange-200 text-conOrange-200 font-semibold text-tail-900 text-xs mt-2 py-0.5 px-1 rounded'>
															<span className='mt-auto'>
																{blogAuthor.authorName}
															</span>{' '}
															|<span>published at {blogCreatedAt}</span>
														</p>
														<ul className='flex justify-center w-full flex-wrap'>
															{blogCategories.map(
																({ id: categoryId, categoryName }) => (
																	<Fragment key={categoryId}>
																		<li className='bg-conOrange-200 text-center text-xs text-conBlueGreen-700 py-0.5 px-1 mt-2 mr-2 rounded'>
																			{categoryName}
																		</li>
																	</Fragment>
																)
															)}
														</ul>
														<div className='mt-4 flex justify-center'>
															<button
																type='button'
																className='btn btn-block btn-outline border-conBlueGreen-700 text-conBlueGreen-700 hover:bg-conBlue-700 hover:border-transparent hover:text-conOrange-200 btn-sm md:w-fit'
																onClick={() => navigate(getPostPath)}
															>
																Read More&emsp;
																<i className='fas fa-long-arrow-alt-right'></i>
															</button>
														</div>
													</div>
												</div>
											</li>
										</Fragment>
									);
								}
							)}
					</ul>
				</div>
				<div className='my-12 flex justify-center'>
					<button
						type='button'
						className='btn btn-primary bg-conOrange-200 hover:bg-conOrange-300 border-transparent hover:border-transparent text-conBlueGreen-700'
					>
						See all blog articles&emsp;
						<i className='fas fa-long-arrow-alt-right'></i>
					</button>
				</div>
			</section>
			<section>
				<div className='mx-auto px-4 md:px-12 pt-12'>
					<h2 className='text-center text-conOrange-200 font-bold text-conH2'>
						Most recent project
					</h2>
				</div>
			</section>
			<section>
				<div className='mx-auto px-4 md:px-12 mt-12'>
					<h2 className='text-center text-conOrange-200 font-bold text-conH2'>
						Top 5 recent projects
					</h2>
				</div>
			</section>
		</>
	);
};

export default HomeTemplate;
