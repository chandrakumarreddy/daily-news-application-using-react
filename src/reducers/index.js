import { combineReducers } from "redux";
import latestNews from "./latestNews";
import otherNews from "./otherNews";
import galleryNews from "./getGallery";

const rootReducer = combineReducers({
	latestNews,
	otherNews,
	galleryNews
});

export default rootReducer;
