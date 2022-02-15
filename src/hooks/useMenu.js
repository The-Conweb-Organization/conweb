import React, { useState, useEffect, useContext } from 'react';
import { MenuContext } from './useMenuContext';

export const useShowNavbar = () => {
	const { dispatch } = useContext(MenuContext);
	const [isShowNavbar, setIsShowNavbar] = useState(true);

	useEffect(() => {
		if (isShowNavbar) {
			dispatch({ type: 'desktop' });
		} else {
			dispatch({ type: 'mobile' });
		}
	}, [isShowNavbar, dispatch]);

	return [isShowNavbar, setIsShowNavbar];
};

export const useShowMobileMenu = () => {
	const { dispatch } = useContext(MenuContext);
	const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
	const [isChangeButton, setIsChangeButton] = useState(false);

	useEffect(() => {
		if (isShowMobileMenu && isChangeButton) {
			dispatch({ type: 'showMobileMenu' });
		} else {
			dispatch({ type: 'hideMobileMenu' });
		}
	}, [isShowMobileMenu, isChangeButton, dispatch]);

	return {
		mobileMenu: [isShowMobileMenu, setIsShowMobileMenu],
		changeButton: [isChangeButton, setIsChangeButton]
	};
};
