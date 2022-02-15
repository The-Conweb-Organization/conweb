import { useEffect, useContext } from 'react';
import { MenuAndInfoContext } from './useMenuAndInfoContext';

export const useShowFilter = () => {
	const { state, dispatch } = useContext(MenuAndInfoContext);

	useEffect(() => {
		if (state.isShowFilter) {
			dispatch({ type: 'showFilter' });
		} else {
			dispatch({ type: 'hideFilter' });
		}
	}, [state.isShowFilter, dispatch]);

	return { isShowFilter: state.isShowFilter };
};

export const useShowMenu = () => {
	const { state, dispatch } = useContext(MenuAndInfoContext);

	useEffect(() => {
		if (state.isShowMenu && state.isChangeButton) {
			dispatch({ type: 'showMenu' });
		} else {
			dispatch({ type: 'hideMenu' });
		}
	}, [state.isShowMenu, state.isChangeButton, dispatch]);

	return {
		isShowMenu: state.isShowMenu,
		isChangeButton: state.isChangeButton
	};
};
