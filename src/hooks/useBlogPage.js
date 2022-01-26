import { graphql, useStaticQuery } from 'gatsby';

const useBlogPage = () => {
	const {
		allContentfulPost: { nodes }
	} = useStaticQuery(graphql`
		query BlogTemplateQuery {
			allContentfulPost(sort: { fields: [blogCreatedAt], order: DESC }) {
				nodes {
					blogTitle
					blogCreatedAt
					blogAuthor {
						authorName
					}
					blogCategories {
						categoryName
						categoryId: id
					}
					blogFeaturedImage {
						imageFeatured {
							gatsbyImageData(
								height: 500
								width: 1000
								placeholder: BLURRED
								quality: 90
							)
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

export default useBlogPage;
