import React, {Component} from 'react'
import {Helmet} from 'react-helmet'
import {Link, NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Advantages from "../components/banners/advantages"
import Map from "../components/Map"
import ReviewsSlider from '../components/banners/reviews'

class HomePage extends Component {

	head() {
		return (
			<Helmet bodyAttributes={{class: "homePage"}}>
				<title>{`Главная - Адвокат Дмитрий Пикунов`}</title>
			</Helmet>
		);
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
					<div className="main container">
						<div className="spotlights">
							<div className="row">
								<div className="col-md-6 col-lg-4">
									<div className="item_wrap">
										<div className="img">
											<img src="http://via.placeholder.com/300x250"/>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4">
									<div className="item_wrap">
										<div className="img">
											<img src="http://via.placeholder.com/300x250"/>
										</div>
									</div>
								</div>
								<div className="col-md-6 col-lg-4">
									<div className="item_wrap">
										<div className="img">
											<img src="http://via.placeholder.com/300x250"/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
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

export default {
	component: HomePage
};