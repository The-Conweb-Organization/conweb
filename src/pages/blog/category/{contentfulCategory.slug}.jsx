import React from 'react';

import { graphql } from 'gatsby';
import CategoryTemplate from '../../../templates/CategoryTemplate';

const CategoryPage = ({ data: { contentfulCategory } }) => {
	return <CategoryTemplate category={contentfulCategory} />;
};

export default CategoryPage;

export const query = graphql`
	query ($id: String) {
		contentfulCategory(id: { eq: $id }) {
			...BlogCategory
		}
	}
`;
