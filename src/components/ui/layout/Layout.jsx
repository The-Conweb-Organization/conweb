import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<header className='theme-dark bg-fill'>
				<div className='hidden mx-auto p-4 md:p-12 md:block'>
					<h1 className='text-7xl text-accent uppercase text-center font-black'>
						Conweb
					</h1>
					<p className='text-center text-secondary font-bold'>
						Showcase for web and tech related blog articles and projects.
					</p>
				</div>
				<Navbar />
			</header>

			<main className='theme-dark'>{children}</main>
			<Footer className='theme-dark' />
		</>
	);
};

export default Layout;
