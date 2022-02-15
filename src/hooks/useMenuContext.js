import React, { useReducer, createContext } from 'react';
import {
	initialState,
	menuReducer
} from '../components/utilities/reducerActions';

export const MenuContext = createContext({ state: null, dispatch: null });

export const MenuProvider = ({ children }) => {
	const [state, dispatch] = useReducer(menuReducer, initialState);

	return (
		<MenuContext.Provider value={{ state, dispatch }}>
			{children}
		</MenuContext.Provider>
	);
};
