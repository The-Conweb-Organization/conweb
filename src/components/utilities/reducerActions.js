export const initialState = {
	isShowMenu: true,
	isChangeButton: false
};
export const menuReducer = (state, action) => {
	switch (action.type) {
		case 'showMobileMenu':
			return { isShowMenu: true, isChangeButton: true };
		case 'hideMobileMenu':
			return { isShowMenu: false, isChangeButton: false };
		default:
			return state;
	}
};
