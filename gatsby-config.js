require('dotenv').config({
	path: '.env'
});

const contentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
	throw new Error(
		'Contentful spaceId and the access token need to be provided'
	);
}

module.exports = {
	siteMetadata: {
		title: 'Conweb',
		title: 'Showcase for web and tech related blog articles and projects.'
	},
	pathPrefix: '/',
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-postcss',
		'gatsby-plugin-fontawesome-css',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-classes',
						options: {
							classMap: {
								'heading[depth=2]': 'mb-6 text-conOrange-200 text-conH2',
								'heading[depth=3]': 'mb-4 text-conH3'
							}
						}
					}
				],
				gfm: true
			}
		}
	]
};
