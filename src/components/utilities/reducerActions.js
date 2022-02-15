export const initialState = {
	isShowFilter: false,
	isShowMenu: true,
	isChangeButton: false
};
export const menuAndInfoReducer = (state, action) => {
	switch (action.type) {
		case 'showFilter':
			return { isShowFilter: true };
		case 'hideFilter':
			return { isShowFilter: false };
		case 'showMenu':
			return { isShowMenu: true, isChangeButton: true };
		case 'hideMenu':
			return { isShowMenu: false, isChangeButton: false };
		default:
			return state;
	}
};
