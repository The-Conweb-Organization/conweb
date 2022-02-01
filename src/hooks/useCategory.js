import { graphql, useStaticQuery } from 'gatsby';

const useCategory = () => {
	const {
		allContentfulCategory: { nodes }
	} = useStaticQuery(graphql`
		query CategoryTemplateQuery {
			allContentfulCategory {
				nodes {
					categoryName
					categoryId: id
					getCategoryPage: gatsbyPath(
						filePath: "/blog/category/{contentfulCategory.slug}"
					)
				}
			}
		}
	`);

	return { nodes };
};

export default useCategory;
