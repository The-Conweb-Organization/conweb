export const initialState = {
	isShowNavbar: true,
	isShowMobileMenu: false,
	isChangeButton: false
};
export const menuReducer = (state, action) => {
	switch (action.type) {
		case 'desktop':
			return { isShowNavbar: true };
		case 'mobile':
			return { isShowNavbar: false };
		case 'showMobileMenu':
			return { isShowMobileMenu: true, isChangeButton: true };
		case 'hideMobileMenu':
			return { isShowMobileMenu: false, isChangeButton: false };
		default:
			return state;
	}
};
