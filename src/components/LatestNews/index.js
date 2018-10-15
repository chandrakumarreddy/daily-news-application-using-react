import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const renderLatestNews = latestnews => {
	if (latestnews) {
		return latestnews.map(item => (
			<Link key={item.id} className="item" to={`/news/${item.id}`}>
				<div
					className="imageCover"
					style={{
						backgroundImage: `url(/images/articles/${item.img})`
					}}
				>
					<div className="description">
						<span>{item.category}</span>
						<div>{item.title}</div>
					</div>
				</div>
			</Link>
		));
	}
};

const LatestNews = props => {
	return <div className="homeLatest">{renderLatestNews(props.mainnews)}</div>;
};
export default LatestNews;
