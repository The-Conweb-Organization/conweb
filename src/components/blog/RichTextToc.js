import React /* useState, useEffect,  useRef*/ from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const RichTextToc = ({ blogContent }) => {
	const headingTypes = [BLOCKS.HEADING_2, BLOCKS.HEADING_3];
	const headingsRaw = JSON.parse(blogContent.raw);

	const headingsFiltered = headingsRaw.content.filter(item =>
		headingTypes.includes(item.nodeType)
	);

	const document = {
		nodeType: 'document',
		content: headingsFiltered
	};

	const options = {
		renderNode: {
			[BLOCKS.HEADING_2]: (node, children) => {
				return <div>{children}</div>;
			},
			[BLOCKS.HEADING_3]: (node, children) => {
				return <div>{children}</div>;
			}
		}
	};

	return <div>{documentToReactComponents(document, options)}</div>;
};

export default RichTextToc;
