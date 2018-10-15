import React from "react";
import { connect } from "react-redux";
import { latestNews } from "../../actions/latestNews";
import { otherNews } from "../../actions/otherNews";
import LatestNews from "../../components/LatestNews";
import OtherNews from "../../components/OtherNews";

class Home extends React.Component {
	componentDidMount() {
		this.props.fetchMainNews();
		this.props.fetchOtherNews();
	}
	render() {
		return (
			<div>
				<LatestNews mainnews={this.props.headNews.latestnews} />
				<OtherNews subnews={this.props.subNews.othernews} />
			</div>
		);
	}
}

export default connect(
	state => ({ headNews: state.latestNews, subNews: state.otherNews }),
	dispatch => ({
		fetchMainNews: () => dispatch(latestNews()),
		fetchOtherNews: () => dispatch(otherNews())
	})
)(Home);
