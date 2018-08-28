import React, {Component} from 'react';
import classNames from 'classnames';
import {Helmet} from 'react-helmet';
import {Link, NavLink} from 'react-router-dom';

class HomePage extends Component {

	head() {
		return (
			<Helmet bodyAttributes={{class: "homePage"}}>
				<title>{`Главная страница Дмитрия Пикунова`}</title>
			</Helmet>
		);
	}

	render() {
		return (
			<section className="homePage_wrap">
				{this.head()}
				<div className="hero">
					<div className="content_wrap">
						<h1>
							Пикунов Дмитрий Викторович
						</h1>
						<span className="msg">
                Ваш адвокат на все случаи жизни
              </span>
						<Link to="/about">
							<span>Подрообнее</span>
						</Link>
					</div>
					<div className="pageScroll">
						<i className="fas fa-chevron-down"></i>
					</div>
				</div>
				<div className="main">
					<div className="spotlights">
						<div className="grid">
							<div className="column column_4_12">
								<div className="item_wrap">
									<div className="img">
										<img src="http://via.placeholder.com/300x250"/>
									</div>
								</div>
							</div>
							<div className="column column_4_12">
								<div className="item_wrap">
									<div className="img">
										<img src="http://via.placeholder.com/300x250"/>
									</div>
								</div>
							</div>
							<div className="column column_4_12">
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
		);
	}
}

export default {
	component: HomePage
};