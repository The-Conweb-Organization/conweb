import { useEffect, useRef, useState } from 'react';

export default ({ root = null, rootMargin, threshold = 0 }) => {
	const [entry, updateEntry] = useState({});
	const [node, setNode] = useState(null);

	console.log(Object.getOwnPropertyNames(node));

	const observer = useRef(
		new window.IntersectionObserver(([entry]) => updateEntry(entry), {
			root,
			rootMargin,
			threshold
		})
	);

	useEffect(() => {
		const { current: currentObserver } = observer;

		currentObserver.disconnect();

		// if (node.current.childNodes.length > 0) {
		// 	currentObserver.observe(node.current.childNodes);
		// } else {
		// 	currentObserver.observe(node);
		// }

		if (node) currentObserver.observe(node);

		return () => currentObserver.disconnect();
	}, [node]);

	return [setNode, entry];
};
