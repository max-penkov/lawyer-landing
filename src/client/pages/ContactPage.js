import React, {Component} from 'react';
import classNames from 'classnames';
import { Helmet } from 'react-helmet';
import {Link, NavLink} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { validate_contactForm as validate }  from './../common/forms/validation';
import { renderTextField, renderTextarea } from './../common/forms/input-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InternalTextBanner from './../components/banners/internalTextBanner';

import axios from 'axios';

class ContactPage extends Component {

	submit(data){
		console.log(data);

		axios.post('/sendmail', data)
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});

	}

	head(){
		return (
			<Helmet bodyAttributes={{class: "contactPage"}}>
				<title>{`Контакты - Пикунов Дмитрий Викторович`}</title>
			</Helmet>
		);
	}

	render() {
		const { handleSubmit } = this.props

		return (

			<section className="contactPage_wrap">
				{this.head()}
				<InternalTextBanner Heading="Контакты" wrapperClass="contact" />
				<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}  transitionAppearTimeout={5000} transitionEnter={false} transitionLeave={false}>
					<div className="main anim-appear container">
						<div className="row justify-content-center">
							<div className="col-6">
								<div className="content_block">

									<form onSubmit={handleSubmit(this.submit.bind(this))}>

										<div className="form_wrap">


											<div className="form_row">
												<Field
													name="firstName"
													component={renderTextField}
													label="Имя:"
												/>
											</div>

											<div className="form_row">
												<Field
													name="lastName"
													component={renderTextField}
													label="Фамилия:"
												/>
											</div>

											<div className="form_row">
												<Field
													name="email"
													component={renderTextField}
													label="Email:"
												/>
											</div>

											<div className="form_row">
												<Field
													name="message"
													component={renderTextarea}
													label="Сообщение:"
												/>
											</div>

											<div className="form_buttons">
												<button className="btn first" type="submit">
													Отправить
												</button>
											</div>

										</div>

									</form>

								</div>
							</div>
						</div>
					</div>
				</ReactCSSTransitionGroup>

			</section>

		);
	}
}


ContactPage = reduxForm({
	form: 'contactForm',
	validate,
	enableReinitialize: true,
})(ContactPage);

export default {
	component: ContactPage
};