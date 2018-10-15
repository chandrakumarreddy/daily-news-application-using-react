import { OTHERNEWS } from "./types";
const URL = "http://localhost:3004";

export const otherNews = () => async dispatch => {
	const response = await fetch(
		`${URL}/articles?_order=desc&_start=3&_end=10`
	).then(res => res.json());
	dispatch({ type: OTHERNEWS, payload: response });
};
