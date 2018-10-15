import { LATESTNEWS } from "../actions/types";

export default function latestNews(state = {}, action) {
	switch (action.type) {
		case LATESTNEWS:
			return { ...state, latestnews: action.payload };
		default:
			return state;
	}
}
