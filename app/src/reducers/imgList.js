const initialState = [];

const imgList = (state = initialState, { type, payload }) => {
	switch (type) {
		case "set_imgList": {
			return payload;
		}
		default:
			return state;
	}
};
export const asyncImgList = list => {
	return async dispatch => {
		dispatch({ type: "set_imgList", payload: list });
	};
};
export default imgList;
