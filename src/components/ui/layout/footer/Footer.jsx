import React from 'react';
import { Link } from 'gatsby';
import useBottomNavigation from '../../../../hooks/useBottomNavigation';

const Footer = () => {
	const bottomNavigation = useBottomNavigation();

	return (
		<footer className='bg-conBlueGreen-700'>
			<div className='mx-auto px-4 md:px-12 pt-12'>
				<div className='bg-conOrange-200 rounded flex flex-col md:flex-row items-center justify-center md:justify-between w-full px-4 py-6'>
					<h3 className='text-4xl text-center text-conBlueGreen-700 font-bold flex-auto mb-6'>
						Newsletter
					</h3>
					<form className='flex-auto w-full md:w-fit'>
						<div className='flex flex-col md:flex-row justify-center items-center'>
							<input
								className='input input-bordered border-conBlueGreen-700 focus:outline-conBlueGreen-700 w-full mb-4 md:mb-0 md:mr-4'
								type='text'
								id='email'
								name='email'
							/>
							<button
								className='btn btn-secondary btn-block md:w-fit bg-conBlueGreen-700 border-transparent hover:bg-conBlueGreen-800 hover:border-transparent text-conOrange-200 hover:text-conOrange-300'
								type='submit'
							>
								Subscribe
							</button>
						</div>
					</form>
				</div>
				<div className='flex flex-col md:flex-row md:items-center md:justify-between w-full '>
					<p className=' text-conOrange-200 text-center my-3'>
						Copyright &copy; 2022 - 2022 Conweb. All Rights Reserved
					</p>
					<nav>
						<ul className='flex flex-col justify-center items-center md:flex-row my-3'>
							{bottomNavigation.map((item, idx) => {
								const { url, title } = item;
								return (
									<li
										className='btn btn-primary btn-link text-conOrange-200 hover:text-conOrange-300'
										key={idx}
									>
										<Link to={`/${url}`}>{title}</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
