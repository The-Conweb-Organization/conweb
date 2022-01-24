import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useTopNavigation from '../../../../hooks/useTopNavigation';

const Navbar = () => {
	const topNavigation = useTopNavigation();
	const regex = /[a-zA-Z0-9]+/gm;

	return (
		<nav className='bg-conBlueGreen-700'>
			<div className='flex flex-col mx-auto p-4 md:p-12 md:flex-row md:items-center'>
				<div className='block mx-auto p-4 md:p-12 md:hidden'>
					<h1 className='text-4xl text-conOrange-200 uppercase text-center'>
						Conweb
					</h1>
				</div>
				<div className='flex justify-center'>
					{topNavigation && topNavigation.at(-1).url.match(regex) && (
						<Link to={`${topNavigation.at(0).url}`}>
							{/* <img src='' alt='Logo' /> */}
							LOGO
						</Link>
					)}
				</div>
				<ul className='flex flex-col md:flex-row md:items-center md:w-full md:mx-16'>
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
					<div className='order-first pb-8 md:order-none md:pb-0 md:pl-4 md:flex-auto md:w-full'>
						<form>
							<div className='form-control'>
								<div className='relative'>
									<input
										className='input input-primary input-boarderd w-full pr-16'
										type='text'
										placeholder='Search...'
									/>
									<button className='absolute top-0 right-0 rounded-l-none btn btn-ghost border-l-2 border-conBlueGreen-700'>
										<FontAwesomeIcon icon={faSearch} />
									</button>
								</div>
							</div>
						</form>
					</div>
				</ul>
				<button
					type='button'
					className='btn btn-primary bg-conOrange-200 hover:bg-conOrange-300 border-transparent hover:border-transparent text-conBlueGreen-700 w-full mt-16 md:mt-0 md:w-fit'
				>
					Subscribe
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
