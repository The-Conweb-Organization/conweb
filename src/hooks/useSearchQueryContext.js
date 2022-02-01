import React, { createContext, useState } from 'react';

export const SearchQueryContext = createContext();

export const SearchQueryProvider = ({ children }) => {
	const [query, setQuery] = useState(null);

	return (
		<SearchQueryContext.Provider
			value={{
				query,
				setQuery
			}}
		>
			{children}
		</SearchQueryContext.Provider>
	);
};
