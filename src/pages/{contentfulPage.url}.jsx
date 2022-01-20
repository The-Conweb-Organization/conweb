import React from 'react';
import { graphql } from 'gatsby';

const Page = ({ data }) => {
	return (
		<main>
			<h1>{data.contentfulPage.title}</h1>
			<p>{data.contentfulPage.longText.longText}</p>
		</main>
	);
};

export const data = graphql`
	query pageQuery($id: String) {
		contentfulPage(id: { eq: $id }) {
			url
			title
			longText {
				longText
			}
			id
		}
	}
`;

export default Page;
