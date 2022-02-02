import React, { useContext } from 'react';
import { graphql } from 'gatsby';
import { SearchQueryContext } from '../hooks/useSearchQueryContext';
import { useFlexSearch } from 'react-use-flexsearch';
import useSearchQuery from '../hooks/useSearchQuery';

const SearchTemplate = () => {
	const {
		data: { index, store }
	} = useSearchQuery();

	const searchQueryCtx = useContext(SearchQueryContext);
	const results = useFlexSearch(searchQueryCtx.query, index, store);

	console.log(results);

	return (
		<section>
			<div className='mx-auto px-4 md:px-12 pt-12'>
				<h2 className='text-center text-conOrange-200 font-bold text-conH2'>
					Search
				</h2>
			</div>
		</section>
	);
};

export default SearchTemplate;
