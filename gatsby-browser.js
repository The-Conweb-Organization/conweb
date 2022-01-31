import React from 'react';
import Layout from './src/components/ui/layout/Layout';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/700.css';
import './src/styles/tailwind.css';

export const wrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>;
};
