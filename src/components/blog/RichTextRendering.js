import React /* useState, useEffect,  useRef*/ from 'react';
// import { InView } from 'react-intersection-observer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const RichTextRendering = ({ blogContent /* onObserveCallback */ }) => {
	// SAVE FOR LATER
	// const [saveEntry, setSaveEntry] = useState({});
	// const headingRef = useRef(null);

	// onObserveCallback(saveEntry);

	// useEffect(() => {
	// 	const intersectOptions = {
	// 		root: null,
	// 		rootMargin: '0px',
	// 		threshold: [1]
	// 	};

	// 	const headingObserver = new IntersectionObserver(([entry]) => {
	// 		if (
	// 			(entry.target.localName === 'h2' && entry.isIntersecting) ||
	// 			(entry.target.localName === 'h3' && entry.isIntersecting)
	// 		) {
	// 			setSaveEntry(prevItem => ({
	// 				...prevItem,
	// 				entry
	// 			}));
	// 		} else {
	// 			return;
	// 		}
	// 	}, intersectOptions);

	// 	const headingRefCurrent = headingRef.current;

	// 	if (headingRefCurrent) {
	// 		Array.from(headingRefCurrent.children).forEach(item => {
	// 			headingObserver.observe(item);
	// 		});
	// 	}

	// 	return () => {
	// 		if (!headingRefCurrent) {
	// 			Array.from(headingRefCurrent.children).forEach(item => {
	// 				headingObserver.unobserve(item);
	// 			});
	// 		}
	// 	};
	// }, [headingRef, onObserveCallback, saveEntry]);

	// SAVE FOR LATER

	const options = {
		renderMark: {
			[MARKS.BOLD]: text => {
				return <b className='font-bold'>{text}</b>;
			},
			[MARKS.ITALIC]: text => {
				return <i className='font-italic'>{text}</i>;
			},
			[MARKS.UNDERLINE]: text => {
				return <u className='underline'>{text}</u>;
			},
			[MARKS.CODE]: text => {
				if (text.length > 0) {
					return <code className='bg-gray-300'>{text}</code>;
				}
			}
		},
		renderNode: {
			[BLOCKS.HEADING_2]: (node, children) => {
				return (
					<h2 className='text-conH2 text-conOrange-200 my-6'>{children}</h2>
				);
			},
			[BLOCKS.HEADING_3]: (node, children) => {
				return (
					<h3 className='text-conH3 text-conOrange-200 my-6'>{children}</h3>
				);
			},
			[BLOCKS.PARAGRAPH]: (node, children) => {
				return <p className='text-conPara my-4'>{children}</p>;
			},
			[BLOCKS.UL_LIST]: (node, children) => {
				return <ul className='list-disc pl-4'>{children}</ul>;
			},
			[BLOCKS.EMBEDDED_ENTRY]: node => {
				console.log(JSON.stringify(blogContent, null, 2));
				const typename = node.data.target.__typename;
				const codeLanguage = node.data.target.codeLanguage;

				if (typename === 'ContentfulCode') {
					return (
						<SyntaxHighlighter
							className='mb-4'
							language={codeLanguage}
							style={atomOneDarkReasonable}
							showLineNumbers
						>
							{node.data.target.codeBlock.codeBlock}
						</SyntaxHighlighter>
					);
				}
			}
		}
	};

	return (
		<div /* ref={headingRef} */>{renderRichText(blogContent, options)}</div>
	);
};

export default RichTextRendering;
