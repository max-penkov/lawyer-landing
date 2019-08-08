import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link, NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Advantages from "../components/banners/advantages"
import Map from "../components/Map"
import ReviewsSlider from '../components/banners/reviews'
import webConfig from "../../../webConfig"
import {fetchServices, fetchServicesIfNeeded} from "../actions";
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


class HomePage extends Component {

	componentDidMount() {
		this.props.fetchServicesIfNeeded();
	}

	head() {
		return (
			<Helmet bodyAttributes={{class: "homePage"}}>
				<title>{`Главная - Адвокат Дмитрий Пикунов`}</title>
			</Helmet>
		);
	}

	renderServices() {
		if (!this.props.pageData == false) {
			return this.props.pageData.map((service, index) => {
				return (
					<div key={index} className="col-sm-12 col-md-4">
						<div className="item_wrap">
							<div className="img">
								<img src={`${webConfig.siteURL}/assets/graphics/homePage/case_${index}.jpg`} width="300"
									 height="250"/>
							</div>
							<div className="details card">
								<div className="card-body">
									<div className="short_desc">
										{service.serviceName}
									</div>
									<div className="short_price">{service.price}</div>
								</div>
							</div>
						</div>
					</div>
				);
			})
		}
		if (this.props.pageData == null) {
			return (
				<div className="col">
					{this.props.isFetching &&
					<div className="icon">
						<FontAwesomeIcon icon="spinner" spin/>
					</div>}
				</div>
			)
		}

	}

	render() {
		return (
			<div>
				<section className="homePage_wrap section">
					{this.head()}
					<div className="hero">
						<div className="content_wrap">
							<div className="blackout"></div>
							<div className="hero_body">
								<h1>
									Пикунов Дмитрий Викторович
								</h1>
								<span className="msg">
                			Адвокат, оказываю высококвалифицированную юридическую помощь в соответствии с законами. За многолетний опыт работы выработал свой, уникальный подход к работе с клиентами.
              			</span>
								<Link to="/about">
									<span>Подробнее</span>
								</Link>
							</div>
						</div>
						<div className="pageScroll">
							<FontAwesomeIcon icon="chevron-down"/>
						</div>
					</div>
					<div className="mt-5 pt-5 container">
						<img src={`${webConfig.siteURL}/assets/graphics/homePage/pikunov_main.jpg`}
							 className="float-md-left mr-md-4 shadow mx-sm-auto d-block rounded"
							 alt="Пикунов"/>
						<p className="t">
							На этой странице я, Пикунов Дмитрий Викторович, адвокат по уголовным делам, представляю
							группу адвокатов и юристов, оказывающих юридические услуги гражданам и организациям на
							возмездной основе.
						</p>
						<p>Непосредственно я специализируюсь на	<strong><u>уголовных делах экономической направленности</u></strong>, а также представляю интересы доверителей в
							арбитражных судах. Мои коллеги смогут Вам оказать помощь в решении иных вопросов.</p>
						<p>​Определяющим в отношениях с доверителями для нас является честность, поэтому мы не беремся
							за "гиблые" дела и, если вашу проблему невозможно решить юридическим путем, то вам об этом
							так и будет сказано.
							Формулировки заключаемых с нами соглашений ясны и понятны, а процесс формирования цены
							прозрачен и предсказуем.</p>
					</div>
					<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}
											 transitionAppearTimeout={5000} transitionEnter={false}
											 transitionLeave={false}>
						<div className="main anim-appear container">
							<h2>Услуги</h2>
							<div className="spotlights">
								<div className="row">
									{this.renderServices()}
									<Link className="btn-service" to="/services"><span>Все услуги</span></Link>
								</div>
							</div>
						</div>
					</ReactCSSTransitionGroup>
				</section>
				<section className="section">
					<Advantages Heading="Преимущества"/>
				</section>
				<section className="section">
					<div className="container">
						<ReviewsSlider Heading="Отзывы"/>
					</div>
				</section>
				<section className="section">
					<div className="container">
						<Map Heading="Как добраться"/>
					</div>
				</section>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		pageData: state.services.items ? state.services.items.sort((a, b) => {
			return Math.random() - 0.5
		}).slice(0, 3) : state.services.items,
		isFetching: state.services.isFetching
	};

}

function loadData(store) {
	return store.dispatch(fetchServices());
}

export default {
	loadData,
	component: connect(mapStateToProps, {fetchServices, fetchServicesIfNeeded})(HomePage)
};