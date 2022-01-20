import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<header>
				<div className='hidden mx-auto p-4 md:p-12 md:block'>
					<h1 className='text-7xl text-conOrange-200 uppercase text-center font-black'>
						Conweb
					</h1>
					<p className='text-center'>
						Showcase for web and tech related blog articles and projects.
					</p>
				</div>
				<Navbar />
			</header>

			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
