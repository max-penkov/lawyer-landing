import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
import {Helmet} from 'react-helmet';

class Case extends Component {

	head() {
		return (
			<Helmet bodyAttributes={{class: "servicesPage"}}>
				<title>{`Кейсы - Пикунов Дмитрий Викторович`}</title>
			</Helmet>
		);
	}

	render() {
		return (
			<div>
				{this.head()}
				<InternalTextBanner Heading="Кейсы" wrapperClass="services"/>
				<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={5000}
										 transitionEnter={false} transitionLeave={false}>
					<div className="main anim-appear container">
						<div className="services_grid row">
							<div className="item col-md-4">
								<div className="icon">
									<i className="fab fa-connectdevelop"></i>
								</div>
								<div className="text">
									<span className="title">Global coverage</span>
									<span className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.
                                            </span>
								</div>
							</div>

							<div className="item col-md-4">
								<div className="icon">
									<i className="fab fa-connectdevelop"></i>
								</div>
								<div className="text">
									<span className="title">Global coverage</span>
									<span className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.
                                            </span>
								</div>
							</div>

							<div className="item col-md-4">
								<div className="icon">
									<i className="fab fa-connectdevelop"></i>
								</div>
								<div className="text">
									<span className="title">Global coverage</span>
									<span className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.
                                            </span>
								</div>
							</div>

							<div className="item col-md-4">
								<div className="icon">
									<i className="fab fa-connectdevelop"></i>
								</div>
								<div className="text">
									<span className="title">Global coverage</span>
									<span className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.
                                            </span>
								</div>
							</div>

							<div className="item col-md-4">
								<div className="icon">
									<i className="fab fa-connectdevelop"></i>
								</div>
								<div className="text">
									<span className="title">Global coverage</span>
									<span className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.
                                            </span>
								</div>
							</div>

							<div className="item col-md-4">
								<div className="icon">
									<i className="fab fa-connectdevelop"></i>
								</div>
								<div className="text">
									<span className="title">Global coverage</span>
									<span className="desc">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ipsum enim.
                                            </span>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>

		);
	}

};

export default {
	component: Case
};