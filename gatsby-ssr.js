import React from 'react';
import { SearchQueryProvider } from './src/hooks/useSearchQueryContext';
import { BlogProjectDataProvider } from './src/hooks/useBlogProjectDataContext';
import { MenuAndInfoProvider } from './src/hooks/useMenuAndInfoContext';
import Layout from './src/components/ui/layout/Layout';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import './src/styles/tailwind.css';
import { darkMode } from './src/components/utilities/darkMode';

const headComponents = [
	<script
		key='darkMode'
		dangerouslySetInnerHTML={{
			__html: darkMode()
		}}
	/>
];

export const onRenderBody = ({ setHeadComponents }) => {
	setHeadComponents(headComponents);
};

export const wrapPageElement = ({ element, props }) => (
	<Layout {...props}>{element}</Layout>
);

export const wrapRootElement = ({ element }) => (
	<BlogProjectDataProvider>
		<MenuAndInfoProvider>
			<SearchQueryProvider>{element}</SearchQueryProvider>
		</MenuAndInfoProvider>
	</BlogProjectDataProvider>
);
