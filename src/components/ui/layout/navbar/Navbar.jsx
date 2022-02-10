import React, { useState, useContext, useEffect } from 'react';
import { SearchQueryContext } from '../../../../hooks/useSearchQueryContext';
import { useLocation } from '@reach/router';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faTimes } from '@fortawesome/free-solid-svg-icons';
import useTopNavigation from '../../../../hooks/useTopNavigation';
import SearchBar from '../../../search/SearchBar';

const Navbar = () => {
	const { search } = useLocation();
	const query = new URLSearchParams(search).get('search');
	const [toggleMenu, setToggleMenu] = useState(false);
	const [searchQuery, setSearchQuery] = useState(query || '');
	const topNavigation = useTopNavigation();
	const regex = /[a-zA-Z0-9]+/gm;
	const logo = '../../../../assets/images/me.jpg';

	const searchQueryCtx = useContext(SearchQueryContext);

	useEffect(() => {
		searchQueryCtx.setQuery(searchQuery);
	}, [searchQuery, searchQueryCtx]);

	const onToggleMenuHandler = () => {
		setToggleMenu(prevState => !prevState);
	};

	return (
		<nav className='bg-conBlueGreen-700 relative'>
			<div className='flex flex-col mx-auto p-4 md:p-12 md:flex-row md:items-center relative'>
				<div className='block mx-auto p-4 md:p-12 md:hidden'>
					<h1 className='text-4xl text-conOrange-200 uppercase text-center'>
						Conweb
					</h1>
				</div>
				{!toggleMenu ? (
					<button
						type='button'
						className='visible md:invisible btn btn-square bg-conBlueGreen-800 active:bg-conBlueGreen-800 active:border-transparent border-transparent absolute top-6 right-6'
						onClick={onToggleMenuHandler}
					>
						<FontAwesomeIcon className='text-xl' icon={faStream} />
					</button>
				) : (
					<button
						type='button'
						className='visible md:invisible btn btn-square bg-conBlueGreen-800 active:bg-conBlueGreen-800 active:border-transparent absolute top-6 right-6'
						onClick={onToggleMenuHandler}
					>
						<FontAwesomeIcon className='text-xl' icon={faTimes} />
					</button>
				)}
				<div className='flex justify-center absolute md:static top-4 left-4'>
					<Link to={'/'}>
						<StaticImage
							src={logo}
							width={75}
							height={75}
							placeholder='blurred'
							alt='Logo'
							className='rounded-lg'
						/>
					</Link>
				</div>
				<ul
					className={`transition-all duration-150 ease-in-out flex flex-col md:flex-row md:items-center md:w-full md:mx-16 md:visible ${
						!toggleMenu ? 'h-0 invisible' : 'h-full visible'
					}`}
				>
					{topNavigation.map((item, idx) => {
						const { url, title } = item;
						return !url.match(regex) ? (
							<li className='mb-4 md:mb-0 md:mr-4 md:flex-auto' key={idx}>
								<Link
									className='btn btn-primary bg-conOrange-200 hover:bg-conOrange-300 border-transparent hover:border-transparent text-conBlueGreen-700 w-full'
									to={`/`}
								>
									{title}
								</Link>
							</li>
						) : (
							<li className='mb-4 md:mb-0 md:mr-4 md:flex-auto' key={idx}>
								<Link
									className='btn btn-primary bg-conOrange-200 hover:bg-conOrange-300 border-transparent hover:border-transparent text-conBlueGreen-700 w-full'
									to={`/${url}`}
								>
									{title}
								</Link>
							</li>
						);
					})}
					<div className='order-first mt-4 mb-4 md:order-none md:mt-0 md:mb-0 md:pl-4 md:pr-4 md:flex-auto md:w-full'>
						<SearchBar
							searchQuery={searchQuery}
							setSearchQuery={setSearchQuery}
						/>
					</div>
					<button
						type='button'
						className='btn btn-primary bg-conOrange-200 hover:bg-conOrange-300 border-transparent hover:border-transparent text-conBlueGreen-700 w-full mt-16 md:mt-0 md:w-fit'
					>
						Subscribe
					</button>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
