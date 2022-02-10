import React from 'react';
import { SearchQueryProvider } from './src/hooks/useSearchQueryContext';
import { BlogProjectDataProvider } from './src/hooks/useBlogProjectDataContext';
import Layout from './src/components/ui/layout/Layout';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import './src/styles/tailwind.css';

export const wrapPageElement = ({ element, props }) => {
	return (
		<BlogProjectDataProvider>
			<SearchQueryProvider>
				<Layout {...props}>{element}</Layout>
			</SearchQueryProvider>
		</BlogProjectDataProvider>
	);
};
