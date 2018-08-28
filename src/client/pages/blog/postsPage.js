import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../../components/banners/internalTextBanner';
import RenderHTML from './../../components/renderHTML';
import {fetchPostsIfNeeded, fetchPosts} from './../../actions';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

class Posts extends Component {

	componentDidMount() {
		this.props.fetchPostsIfNeeded();
	}

	renderPosts() {
		if (this.props.pageData != false) {
			return this.props.pageData.map((post, index) => {
				return (
					<div key={index} className="post col-md-6 col-lg-4">
						<div className="wrap">
							<div className="img">
								<img src={post.imageURL}/>
							</div>
							<div className="details card">
								<div className="card-body">
									<div className="headline">
										<Link to={`/blog/${post.slug}`}>
											{post.postTitle}
										</Link>
									</div>
									<div className="short_desc">
										<RenderHTML wrapperClass="user_content" html={post.shortdescription}/>
									</div>
									<Link className="readMore" to={`/blog/${post.slug}`}>
										Read more
									</Link>
								</div>
							</div>
						</div>

					</div>
				);
			})
		}
	}

	head() {
		return (
			<Helmet bodyAttributes={{class: "postsPage"}}>
				<title>{`Блог - Адвокат Дмитрий Пикунов`}</title>
			</Helmet>
		);
	}

	render() {
		if (!this.props.pageData == false) {
			return (
				<div>
					{this.head()}
					<InternalTextBanner Heading="Posts" wrapperClass="posts"/>
					<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}
											 transitionAppearTimeout={5000} transitionEnter={false}
											 transitionLeave={false}>
						<div className="main anim-appear container">
							<div className="posts row">
								{this.renderPosts()}
							</div>
						</div>
					</ReactCSSTransitionGroup>
				</div>
			);
		}

		if (this.props.pageData == null) {
			return (
				<div>
					{this.head()}
					<InternalTextBanner Heading="" wrapperClass="posts"/>
					<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}
											 transitionAppearTimeout={5000} transitionEnter={false}
											 transitionLeave={false}>
						<div className="main anim-appear container">
							<div className="grid">
								<div className="column column_8_12">
									<div className="posts">

									</div>
								</div>
								<div className="column column_4_12">

								</div>
							</div>
						</div>
					</ReactCSSTransitionGroup>
				</div>
			);
		}

		if (this.props.pageData == false) {
			return (
				<div>
					{this.head()}
					<InternalTextBanner Heading="404 Not found" wrapperClass="posts"/>
					<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}
											 transitionAppearTimeout={5000} transitionEnter={false}
											 transitionLeave={false}>
						<div className="main anim-appear container">
							<div className="grid">
								<div className="column column_8_12">
									<div className="posts">

									</div>
								</div>
								<div className="column column_4_12">

								</div>
							</div>
						</div>
					</ReactCSSTransitionGroup>
				</div>
			);
		}

	}
}
// function componentWillReceiveProps(nextProps) {
// 	if (nextProps.pageData !== this.props.pageData) {
// 		const { dispatch, pageData } = nextProps;
// 		dispatch(fetchPostsIfNeeded())
// 	}
// }
function mapStateToProps(state) {
	console.log('items: ' + state.posts.items);
	return {
		pageData: state.posts.items
	};

};
function loadData(store) {
	return store.dispatch(fetchPosts());
}

export default {
	loadData,
	component: connect(mapStateToProps, {fetchPostsIfNeeded, fetchPosts})(Posts)
};

