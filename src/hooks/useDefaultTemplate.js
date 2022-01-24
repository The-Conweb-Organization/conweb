import { graphql, useStaticQuery } from 'gatsby';

const useDefaultTemplate = () => {
	const {
		allContentfulPage: { nodes }
	} = useStaticQuery(graphql`
		query DefaultTemplateQuery {
			allContentfulPage(filter: { template: { eq: "default" } }) {
				nodes {
					title
					longText {
						childMarkdownRemark {
							html
						}
					}
					template
					url
				}
			}
		}
	`);

	return nodes;
};

export default useDefaultTemplate;
