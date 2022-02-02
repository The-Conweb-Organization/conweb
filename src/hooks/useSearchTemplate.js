import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const useSearchTemplate = () => {
	const {
		localSearchConwebContentfulSearch: { index, store }
	} = useStaticQuery(graphql`
		query SearchQuery {
			localSearchConwebContentfulSearch {
				index
				store
			}
		}
	`);
	return { index, store };
};

export default useSearchTemplate;
