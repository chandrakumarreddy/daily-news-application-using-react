import { OTHERNEWS } from "../actions/types";

export default function(state = {}, action) {
	switch (action.type) {
		case OTHERNEWS:
			return { ...state, othernews: action.payload };
		default:
			return state;
	}
}
