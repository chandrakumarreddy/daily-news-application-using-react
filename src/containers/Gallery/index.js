import React from "react";
import { connect } from "react-redux";
import { getGallery } from "../../actions/galleryNews";
import GalleryNews from "../../components/GalleryNews";

class Gallery extends React.Component {
	componentDidMount() {
		this.props.fetchGallery(this.props.match.params.id);
	}
	render() {
		return (
			<div>
				<GalleryNews gallery={this.props.galleryNews.gallery} />
			</div>
		);
	}
}

export default connect(
	state => ({ galleryNews: state.galleryNews }),
	dispatch => ({ fetchGallery: id => dispatch(getGallery(id)) })
)(Gallery);
