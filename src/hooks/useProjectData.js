import { graphql, useStaticQuery } from 'gatsby';

const useProjectData = () => {
	const {
		allContentfulProject: { nodes }
	} = useStaticQuery(graphql`
		query ProjectDataQuery {
			allContentfulProject {
				nodes {
					...ProjectData
				}
			}
		}
	`);

	return { nodes };
};

export default useProjectData;
