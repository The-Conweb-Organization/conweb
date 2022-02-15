import React, { useReducer, createContext } from 'react';
import {
	initialState,
	menuAndInfoReducer
} from '../components/utilities/reducerActions';

export const MenuAndInfoContext = createContext({
	state: null,
	dispatch: null
});

export const MenuAndInfoProvider = ({ children }) => {
	const [state, dispatch] = useReducer(menuAndInfoReducer, initialState);

	return (
		<MenuAndInfoContext.Provider value={{ state, dispatch }}>
			{children}
		</MenuAndInfoContext.Provider>
	);
};
