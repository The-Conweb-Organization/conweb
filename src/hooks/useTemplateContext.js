import React, { useState, createContext } from 'react';

export const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
	const [pathname, setPathname] = useState('');

	return (
		<TemplateContext.Provider
			value={{
				pathname,
				setPathname
			}}
		>
			{children}
		</TemplateContext.Provider>
	);
};
