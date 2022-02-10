import { graphql } from 'gatsby';

export const queryPostData = graphql`
	fragment BlogPostData on ContentfulPost {
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
				gatsbyImageData(height: 500, width: 1000, quality: 90)
			}
			imageAltText
		}
		excerpt {
			excerpt
		}
	}
`;

export const queryProjectData = graphql`
	fragment ProjectData on ContentfulProject {
		projectTitle
		projectTechnology
		projectCreatedAt
		projectEndAt
		projectLive
		projectGithubRepo
		projectDescription {
			projectDescription
		}
		projectId: id
		projectImage {
			gatsbyImageData(
				width: 1000
				quality: 90
				placeholder: BLURRED
				height: 500
			)
		}
	}
`;

export const queryPost = graphql`
	fragment BlogPost on ContentfulPost {
		...BlogPostData
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
	fragment BlogCategory on ContentfulCategory {
		categoryName
		post {
			...BlogPostData
			getPostPath: gatsbyPath(filePath: "/blog/post/{contentfulPost.slug}")
		}
	}
`;
