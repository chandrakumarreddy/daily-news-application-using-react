import { GET_GALLERY_NEWS } from "../actions/types";

export default function(state = {}, action) {
	switch (action.type) {
		case GET_GALLERY_NEWS:
			return { ...state, gallery: action.payload };
		default:
			return state;
	}
}
