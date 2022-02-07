import { graphql } from 'gatsby';

export default useData;

export const queryPost = graphql`
	fragment BlogData on ContentfulPost {
		blogTitle
		slug
		blogCategories {
			categoryName
			categoryId: id
		}
		blogCreatedAt
		blogAuthor {
			authorName
		}
		blogFeaturedImage {
			photographerUrl
			photographer
			imageFeatured {
				gatsbyImageData(width: 1000)
			}
			imageAltText
		}
		excerpt {
			excerpt
		}
		blogContent {
			raw
			references {
				... on ContentfulCode {
					contentful_id
					codeTitle
					codeBlock {
						codeBlock
					}
					codeLanguage
					__typename
				}
			}
		}
		postId: id
		getPostPath: gatsbyPath(filePath: "/blog/post/{contentfulPost.slug}")
	}
`;

export const queryCategory = graphql`
	fragment CategoryData on ContentfulCategory {
		categoryName
		post {
			blogAuthor {
				authorName
			}
			blogCategories {
				categoryName
				categoryId: id
			}
			blogTitle
			postId: id
			blogFeaturedImage {
				imageFeatured {
					gatsbyImageData(height: 500, width: 1000, quality: 90)
				}
				photographer
				photographerUrl
				imageAltText
			}
			excerpt {
				excerpt
			}
			getPostPath: gatsbyPath(filePath: "/blog/{contentfulPost.slug}")
		}
	}
`;
