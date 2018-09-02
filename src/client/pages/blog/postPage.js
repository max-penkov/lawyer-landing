import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../../components/banners/internalTextBanner';
import RenderHTML from './../../components/renderHTML';
import {fetchPost, clearPostData} from './../../actions';
import {Helmet} from 'react-helmet';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Post extends Component {

	componentDidMount() {
		this.props.fetchPost(this.props.match.params.id);
	}

	componentWillUnmount(){
		this.props.clearPostData();
	}

	renderPosts() {
		if (this.props.pageData != false) {
			return this.props.pageData.map((post, index) => {
				return (
					<div key={index} className="post col-md-6 col-lg-4">
						<div className="wrap">
							<div className="img">
								<img src={post.imageURL.url}/>
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
		const {postData, isFetching} = this.props;
		if(!postData == false){
			return(
				<div>
					{this.head()}
					<InternalTextBanner Heading={postData.postTitle} wrapperClass="post" />
					<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
						<div className="main anim-appear container">
							<div className="row">
								<div className="col">
									<div className="post">
										<div className="post_banner">
											<img src={postData.imageURL.url} />
										</div>
										<RenderHTML wrapperClass="user_content" html={postData.post} />
									</div>
								</div>
							</div>
						</div>
					</ReactCSSTransitionGroup>
				</div>
			);
		}

		if(postData == null){
			return (
				<div>
					<Helmet bodyAttributes={{class: "postPage"}}>
						<title>{`Адвокат Дмитрий Пикунов`}</title>
					</Helmet>
					<InternalTextBanner Heading="" wrapperClass="post" />
					<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
						<div className="main anim-appear container">
							<div className="row">
								<div className="col">
									<div className="post">
										{isFetching &&
										<div className="icon">
											<FontAwesomeIcon icon="spinner" spin/>
										</div>}
									</div>
								</div>
							</div>
						</div>
					</ReactCSSTransitionGroup>
				</div>
			);
		}

		if(postData == false){
			return (
				<div>
					<Helmet bodyAttributes={{class: "postPage"}}>
						<title>{`404 Страница не найдена - Адвокат Дмитрий Пикунов`}</title>
					</Helmet>
					<InternalTextBanner Heading="404 - Страница не найдена" wrapperClass="post" />
					<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
						<div className="main anim-appear container">
							<div className="row">
								<div className="col">
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
		postData: state.post.item,
		isFetching: state.post.isFetching
	};
}

function loadData(store, landingPageID) {
	return store.dispatch(fetchPost(landingPageID));
}

export default {
	loadData,
	component: connect(mapStateToProps, {fetchPost, clearPostData})(Post)
};

