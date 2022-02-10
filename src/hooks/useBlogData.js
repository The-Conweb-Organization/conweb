import { graphql, useStaticQuery } from 'gatsby';

const useBlogData = () => {
	const {
		allContentfulPost: { nodes }
	} = useStaticQuery(graphql`
		query PostDataQuery {
			allContentfulPost(sort: { fields: [blogCreatedAt], order: DESC }) {
				nodes {
					...BlogPost
				}
			}
		}
	`);

	return { nodes };
};

export default useBlogData;
