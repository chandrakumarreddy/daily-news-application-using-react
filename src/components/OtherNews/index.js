import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const renderNews = otherNews => {
	if (otherNews) {
		return otherNews.map(item => (
			<Link to={`/news/${item.id}`} key={item.id} className="item">
				<div
					className="left"
					style={{
						backgroundImage: `url(/images/articles/${item.img})`
					}}
				/>
				<div className="right">
					<h3>{item.title}</h3>
					<div className="category-tag">{item.category}</div>
					<div className="tags">
						<span>
							<i className="fa fa-eye" />
							{item.views}
						</span>
						<span>
							<i className="fa fa-thumbs-up" />
							{item.likes[0]}
						</span>
					</div>
				</div>
			</Link>
		));
	}
};
const OtherNews = props => {
	return (
		<div className="other-news">
			<h2>Other news</h2>
			<div className="other-news-items">{renderNews(props.subnews)}</div>
		</div>
	);
};

export default OtherNews;
