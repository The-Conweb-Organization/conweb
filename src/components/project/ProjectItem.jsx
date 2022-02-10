import React, { Fragment } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useLocation } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const BlogItem = ({ projectItem, isTopFiveArticles }) => {
	const { pathname } = useLocation();

	const {
		projectId,
		slug,
		projectTitle,
		projectTechnology,
		projectCreatedAt,
		projectEndAt,
		projectLive,
		projectGithubRepo,
		projectDescription: { projectDescription },
		projectImage
	} = projectItem;
	const image = getImage(projectImage);

	let projectContent;

	if (pathname.startsWith('/project')) {
		projectContent = (
			<div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6'>
				<div className='lg:col-span-2 w-full flex justify-center drop-shadow-md'>
					<figure className='border-2 border-conBlueGreen-700 h-fit w-full rounded-lg p-2 drop-shadow-md'>
						<GatsbyImage
							className='object-cover h-full w-full rounded-lg'
							image={image}
							alt={slug}
						/>
					</figure>
				</div>
				<div className='lg:col-span-2 flex flex-col h-full bg-conBlueGreen-700 p-2 gap-4 drop-shadow-md rounded'>
					<h3 className='text-4xl md:text-2xl text-center text-conOrange-200 font-bold'>
						{projectTitle}
					</h3>
					<div className='flex justify-center'>
						<p className='border border-conOrange-200 text-conOrange-200 text-tail-900 text-xs py-0.5 px-1 rounded'>
							Project duration <span>{projectCreatedAt}</span> -{' '}
							<span>{projectEndAt}</span>
						</p>
					</div>
					<ul className='flex justify-center w-full flex-wrap mt-12'>
						{projectTechnology.map((technology, idx) => (
							<Fragment key={idx}>
								<li className='bg-conOrange-200 text-center text-xs text-conBlueGreen-700 py-0.5 px-1 mt-2 mr-2 rounded'>
									{technology}
								</li>
							</Fragment>
						))}
					</ul>
				</div>
				<div className='sm:col-span-2 w-full'>
					<p className='text-tail-900 text-center p-1.5 rounded'>
						{projectDescription}
					</p>
					<div className='flex flex-col items-center w-full relative'>
						<a
							href={projectLive}
							className='btn btn-block btn-outline btn-sm border-conBlueGreen-700 text-conBlueGreen-700 hover:bg-conBlue-700 hover:border-transparent hover:text-conOrange-200 md:w-fit mb-4'
							target='_blank'
							rel='nofollow noreferrer'
						>
							Go to live Preview&emsp;
							<FontAwesomeIcon icon={faLongArrowAltRight} />
						</a>
						<a
							href={projectGithubRepo}
							className='btn btn-block btn-outline btn-sm border-conBlueGreen-700 text-conBlueGreen-700 hover:bg-conBlue-700 hover:border-transparent hover:text-conOrange-200 md:w-fit'
							target='_blank'
							rel='nofollow noreferrer'
						>
							Go to Github repo&emsp;
							<FontAwesomeIcon icon={faLongArrowAltRight} />
						</a>
					</div>
				</div>
			</div>
		);
	} else {
		projectContent = (
			<>
				<div
					className={`flex col-span-2 md:col-span-1 justify-self-center drop-shadow-md w-full  ${
						isTopFiveArticles && 'md:w-1/2'
					}`}
				>
					<figure className='border-2 border-conBlueGreen-700 h-fit w-fit rounded-lg p-2 drop-shadow-md'>
						<GatsbyImage
							className={`object-cover ${
								isTopFiveArticles && 'h-40'
							} rounded-lg`}
							image={image}
							alt={slug}
						/>
					</figure>
				</div>
				<div
					className={`flex flex-col col-span-2 md:col-span-1 h-full ${
						!isTopFiveArticles && 'justify-center'
					} bg-conBlueGreen-700 p-2 gap-4 drop-shadow-md rounded`}
				>
					<h3 className='text-4xl md:text-2xl text-center text-conOrange-200 font-bold'>
						{projectTitle}
					</h3>
					<div className='flex justify-center'>
						<p className='border border-conOrange-200 text-conOrange-200 text-tail-900 text-xs py-0.5 px-1 rounded'>
							Project duration <span>{projectCreatedAt}</span> -{' '}
							<span>{projectEndAt}</span>
						</p>
					</div>
					<ul
						className={`flex justify-center w-full flex-wrap ${
							!isTopFiveArticles ? 'mt-12' : ''
						}`}
					>
						{projectTechnology.map((technology, idx) => (
							<Fragment key={idx}>
								<li className='bg-conOrange-200 text-center text-xs text-conBlueGreen-700 py-0.5 px-1 mt-2 mr-2 rounded'>
									{technology}
								</li>
							</Fragment>
						))}
					</ul>
					{isTopFiveArticles && (
						<div className='flex flex-col lg:flex-row items-center justify-center w-full'>
							<a
								href={projectLive}
								className='btn btn-block btn-outline btn-sm border-conOrange-200 text-conOrange-200 hover:bg-conOrange-200 hover:border-transparent hover:text-conBlueGreen-700 md:w-fit mb-4 lg:mb-0 lg:mr-4'
								target='_blank'
								rel='nofollow noreferrer'
							>
								Go to live Preview&emsp;
								<FontAwesomeIcon icon={faLongArrowAltRight} />
							</a>
							<a
								href={projectGithubRepo}
								className='btn btn-block btn-outline btn-sm border-conOrange-200 text-conOrange-200 hover:bg-conOrange-200 hover:border-transparent hover:text-conBlueGreen-700 md:w-fit'
								target='_blank'
								rel='nofollow noreferrer'
							>
								Go to Github repo&emsp;
								<FontAwesomeIcon icon={faLongArrowAltRight} />
							</a>
						</div>
					)}
				</div>
				{!isTopFiveArticles && (
					<div className=' w-full md:w-1/2 col-span-2 justify-self-center'>
						<p className='text-tail-900 text-center p-1.5 rounded'>
							{projectDescription}
						</p>

						<div className='flex flex-col md:flex-row items-center justify-center w-full relative'>
							<a
								href={projectLive}
								className='btn btn-block btn-outline btn-sm border-conBlueGreen-700 text-conBlueGreen-700 hover:bg-conBlue-700 hover:border-transparent hover:text-conOrange-200 md:w-fit mb-4 md:mb-0 md:mr-4'
								target='_blank'
								rel='nofollow noreferrer'
							>
								Go to live Preview&emsp;
								<FontAwesomeIcon icon={faLongArrowAltRight} />
							</a>
							<a
								href={projectGithubRepo}
								className='btn btn-block btn-outline btn-sm border-conBlueGreen-700 text-conBlueGreen-700 hover:bg-conBlue-700 hover:border-transparent hover:text-conOrange-200 md:w-fit'
								target='_blank'
								rel='nofollow noreferrer'
							>
								Go to Github repo&emsp;
								<FontAwesomeIcon icon={faLongArrowAltRight} />
							</a>
						</div>
					</div>
				)}
			</>
		);
	}

	return (
		<>
			<Fragment key={projectId}>{projectContent}</Fragment>
		</>
	);
};

export default BlogItem;
