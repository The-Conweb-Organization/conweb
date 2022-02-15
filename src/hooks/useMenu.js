import { useEffect, useContext } from 'react';
import { MenuContext } from './useMenuContext';

export const useShowMenu = () => {
	const { state, dispatch } = useContext(MenuContext);

	useEffect(() => {
		if (state.isShowMenu && state.isChangeButton) {
			dispatch({ type: 'showMobileMenu' });
		} else {
			dispatch({ type: 'hideMobileMenu' });
		}
	}, [state.isShowMenu, state.isChangeButton, dispatch]);

	return {
		isShowMenu: state.isShowMenu,
		isChangeButton: state.isChangeButton
	};
};
