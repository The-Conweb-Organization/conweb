import React from 'react';
import { SearchQueryProvider } from './src/hooks/useSearchQueryContext';
import { TemplateProvider } from './src/hooks/useTemplateContext';
import Layout from './src/components/ui/layout/Layout';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import './src/styles/tailwind.css';

export const wrapPageElement = ({ element, props }) => {
	return (
		<TemplateProvider>
			<SearchQueryProvider>
				<Layout {...props}>{element}</Layout>
			</SearchQueryProvider>
		</TemplateProvider>
	);
};
