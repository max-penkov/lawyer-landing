import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';
import { Helmet } from 'react-helmet';


class NotFoundPage extends Component {

	head(){
		return (
			<Helmet bodyAttributes={{class: "notFound"}}>
				<title>{`404 страница не найдена - Адвокат Дмитрий Пикунов`}</title>
			</Helmet>
		);
	}

	render(){
		return (
			<div>
				{this.head()}
				<InternalTextBanner Heading="404 - Страница не найдена" wrapperClass="posts" />
				<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
					<div className="main anim-appear container">
						<div className="row">
							<div className="col">
								<div className="posts">
									<p>Извините, такой страницы не существует</p>
								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>
			</div>
		);
	}

}

export default {
	component: NotFoundPage
};