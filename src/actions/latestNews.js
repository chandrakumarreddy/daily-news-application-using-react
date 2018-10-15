import { LATESTNEWS } from "./types";
const URL = "http://localhost:3004";

export const latestNews = () => async dispatch => {
	const response = await fetch(`${URL}/articles?_order=desc&_end=3`, {
		method: "GET"
	}).then(res => res.json());
	dispatch({ type: LATESTNEWS, payload: response });
};
