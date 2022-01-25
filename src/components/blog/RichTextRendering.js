import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const options = {
	renderNode: {
		[BLOCKS.HEADING_2]: (node, children) => {
			return <h2 className='text-conH2 text-conOrange-200'>{children}</h2>;
		},
		[BLOCKS.HEADING_3]: (node, children) => {
			return <h3 className='text-conH3 text-conOrange-200'>{children}</h3>;
		},
		[BLOCKS.PARAGRAPH]: (node, children) => {
			return <p>{children[0]}</p>;
		},
		[BLOCKS.UL_LIST]: (node, children) => {
			return <ul className='list-disc pl-4'>{children}</ul>;
		}
	}
};

const RichTextRendering = ({ blogContent }) => {
	return <>{renderRichText(blogContent, options)}</>;
};

export default RichTextRendering;
