import React from "react";
import Slider from "react-slick";
import "./styles.css";

const renderItems = gallery => {
	if (gallery) {
		const data = gallery[0];
		return (
			<div>
				<h3>The best of {data.artist}</h3>
				<Slider {...settings}>
					{data.images.map((item, index) => (
						<div className="slide-item" key={index}>
							<div
								className="image"
								style={{
									background: `url(/images/galleries/${
										item.img
									})`
								}}
							/>
							<div className="description">
								<span>{item.desc}</span>
							</div>
						</div>
					))}
				</Slider>
			</div>
		);
	}
};

var settings = {
	arrows: false,
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};

const GalleryNews = props => {
	return (
		<div className="gallery-slide-item">{renderItems(props.gallery)}</div>
	);
};

export default GalleryNews;
