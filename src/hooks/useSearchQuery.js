import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useSearchQuery = () => {
	const { localSearchConwebContentfulSearch: data } = useStaticQuery(graphql`
		query useSearchQuery {
			localSearchConwebContentfulSearch {
				index
				store
			}
		}
	`);

	return { data };
};

export default useSearchQuery;
