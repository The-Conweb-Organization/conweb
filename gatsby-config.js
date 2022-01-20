require('dotenv').config({
	path: '.env'
});

const contentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken:
		process.env.CONTENTFUL_ACCESS_TOKEN || process.env.CONTENTFUL_DELIVERY_TOKEN
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js

// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
	contentfulConfig.host = process.env.CONTENTFUL_HOST;
	contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

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
		'gatsby-plugin-postcss',
		'gatsby-plugin-fontawesome-css',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig
		}
	]
};
