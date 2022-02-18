import React from 'react';
import { Link } from 'gatsby';
import useBottomNavigation from '../../../../hooks/useBottomNavigation';

const Footer = () => {
	const bottomNavigation = useBottomNavigation();

	return (
		<footer className='bg-primary' id='footer'>
			<div className='mx-auto px-4 md:px-12 pt-12'>
				<div className='flex flex-col md:flex-row items-center justify-center md:justify-between w-full px-2 py-2 bg-secondary rounded-lg'>
					<h3 className='text-conH3 text-center text-primary font-bold flex-auto'>
						Newsletter
					</h3>
					<form className='flex-auto w-full md:w-fit'>
						<div className='flex flex-col md:flex-row justify-center items-center '>
							<input
								className='bg-secondary text-primary border-2 border-primary placeholder:text-primary w-full pl-4 pr-16 h-12 rounded-lg outline-none focus:border-2 focus:border-accent mb-4 md:mb-0 md:mr-4'
								type='text'
								id='email'
								name='email'
							/>
							<button
								className='btn btn-block md:w-fit bg-secondary border-2 border-primary hover:bg-hover hover:border-primary text-primary hover:text-primary'
								type='submit'
							>
								Subscribe
							</button>
						</div>
					</form>
				</div>
				<div className='flex flex-col md:flex-row md:items-center md:justify-between w-full '>
					<p className=' text-secondary text-center my-3'>
						Copyright &copy; 2022 - 2022 Conweb. All Rights Reserved
					</p>
					<nav>
						<ul className='flex flex-col justify-center items-center md:flex-row my-3'>
							{bottomNavigation.map((item, idx) => {
								const { url, title } = item;
								return (
									<li
										className='btn btn-link text-secondary hover:underline-offset-4'
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
