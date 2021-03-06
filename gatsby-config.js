require('dotenv').config({
	path: '.env'
});

const envConfig = {
	contentfulConfig: {
		spaceId: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
	}
};

const { spaceId, accessToken } = envConfig.contentfulConfig;

if (!spaceId || !accessToken) {
	throw new Error(
		'Contentful spaceId and the access token need to be provided'
	);
}

module.exports = {
	siteMetadata: {
		title: 'Conweb',
		titleTemplate: '%s - conweb.tech',
		description:
			'Showcase for web and tech related blog articles and projects.',
		url: 'https://conweb.tech'
	},
	pathPrefix: '/',
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-postcss',
		'gatsby-plugin-fontawesome-css',
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId,
				accessToken
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-classes',
						options: {
							classMap: {
								'heading[depth=2]': 'mb-6 text-primary text-conH2',
								'heading[depth=3]': 'mb-4 text-conH3'
							}
						}
					}
				],
				gfm: true
			}
		},
		{
			resolve: 'gatsby-plugin-local-search',
			options: {
				name: 'conwebContentfulSearch',
				engine: 'flexsearch',
				query: `{
					allContentfulPost {
						nodes {
							blogTitle,
							blogCategories {
								categoryName
								id
							}
							excerpt {
								excerpt
							}
							id
							gatsbyPath(filePath: "/blog/post/{contentfulPost.slug}")
						}
					}
				}`,
				ref: 'id',
				index: ['blogTitle', 'blogCategories', 'excerpt'],
				store: ['blogTitle', 'blogCategories', 'excerpt', 'gatsbyPath', 'id'],
				normalizer: ({ data }) =>
					data.allContentfulPost.nodes.map(node => ({
						blogTitle: node.blogTitle,
						blogCategories: node.blogCategories,
						excerpt: node.excerpt,
						gatsbyPath: node.gatsbyPath,
						id: node.id
					}))
			}
		}
	]
};
