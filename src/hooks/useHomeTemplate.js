import { graphql, useStaticQuery } from 'gatsby';

const useHomeTemplate = () => {
	const {
		allContentfulPost: { nodes }
	} = useStaticQuery(graphql`
		query HomeTemplateQuery {
			allContentfulPost(
				sort: { fields: [blogCreatedAt], order: DESC }
				limit: 6
			) {
				nodes {
					blogTitle
					blogCreatedAt
					blogAuthor {
						authorName
					}
					blogCategories {
						categoryName
						id
					}
					blogFeaturedImage {
						imageFeatured {
							gatsbyImageData(height: 500, placeholder: BLURRED, quality: 90)
						}
						photographer
						photographerUrl
						imageAltText
					}
					excerpt {
						excerpt
					}
					postId: id
					getPostPath: gatsbyPath(filePath: "/blog/{contentfulPost.slug}")
				}
			}
		}
	`);
	return { nodes };
};

export default useHomeTemplate;
