import { GET_GALLERY_NEWS } from "./types";
const URL = "http://localhost:3004";

export const getGallery = id => async dispatch => {
	const response = await fetch(`${URL}/galleries?id=${id}`, {
		method: "GET"
	}).then(res => res.json());
	dispatch({ type: GET_GALLERY_NEWS, payload: response });
};
