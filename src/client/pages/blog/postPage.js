import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../../components/banners/internalTextBanner';
import RenderHTML from './../../components/renderHTML';
import {fetchPostsIfNeeded, fetchPost} from './../../actions';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';

class Post extends Component {

	componentDidMount() {
		console.log(this.props)
		this.props.fetchPost(this.props.match.params.id);
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
										Читать дальше...
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
			<Helmet bodyAttributes={{class: "postPage"}}>
				<title>{`${this.props.postData.postTitle} - Адвокат Дмитрий Пикунов`}</title>
			</Helmet>
		);
	}

	render() {
		if(!this.props.postData == false){
			return(
				<div>
					{this.head()}
					<InternalTextBanner Heading={this.props.postData.postTitle} wrapperClass="post" />
					<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
						<div className="main anim-appear container">
							<div className="row">
								<div className="col">
									<div className="post">
										<div className="post_banner">
											<img src={this.props.postData.imageURL} />
										</div>
										<RenderHTML wrapperClass="user_content" html={this.props.postData.post} />
									</div>
								</div>
							</div>
						</div>
					</ReactCSSTransitionGroup>
				</div>
			);
		}

		if(this.props.postData == null){
			return (
				<div>
					<Helmet bodyAttributes={{class: "postPage"}}>
						<title>{`React Starter Kit`}</title>
					</Helmet>
					<InternalTextBanner Heading="" wrapperClass="post" />
					<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
						<div className="main anim-appear container">
							<div className="row">
								<div className="column column_12_12">
									<div className="post">

									</div>
								</div>
							</div>
						</div>
					</ReactCSSTransitionGroup>
				</div>
			);
		}

		if(this.props.postData == false){
			return (
				<div>
					<Helmet bodyAttributes={{class: "postPage"}}>
						<title>{`404 not found - React Starter Kit`}</title>
					</Helmet>
					<InternalTextBanner Heading="404 not found" wrapperClass="post" />
					<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
						<div className="main anim-appear">
							<div className="grid">
								<div className="column column_12_12">
									<div className="post">

									</div>
								</div>
							</div>
						</div>
					</ReactCSSTransitionGroup>
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		postData: state.post.item
	};

};

function loadData(store, landingPageID) {
	return store.dispatch(fetchPost(landingPageID));
}

export default {
	loadData,
	component: connect(mapStateToProps, {fetchPost})(Post)
};

