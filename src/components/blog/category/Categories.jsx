import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import useCategory from '../../../hooks/useCategory';

const Categories = () => {
	const { nodes } = useCategory();

	return (
		<div className='flex justify-center bg-conBlueGreen-700 min-h-fit w-full md:w-2/4 m-auto rounded-lg my-12 drop-shadow-md'>
			<div className='w-full md:w-1/4 h-fit py-4'>
				<h3 className='text-4xl md:text-2xl text-center text-conOrange-200 font-bold'>
					Categories
				</h3>
				<ul className='flex justify-center w-full flex-wrap mt-4'>
					{nodes.map(({ categoryId, categoryName, getCategoryPage }) => (
						<Fragment key={categoryId}>
							<li className='bg-conOrange-200 text-center text-xs text-conBlueGreen-700 py-0.5 px-1 mt-2 mr-2 rounded cursor-pointer'>
								<Link to={getCategoryPage}>{categoryName}</Link>
							</li>
						</Fragment>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Categories;
