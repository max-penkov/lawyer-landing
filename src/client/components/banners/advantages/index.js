import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Advantages extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<h2>
					{this.props.Heading}
				</h2>
				<div className="row">
					<div className="col col-sm-12 col-md-4">
						<div className="advantages">
							<div className="advantages-item">
								<div
									className="advantages-image-wrap">
									<div className="advantages-image-wrap2">
										<div className="icon"><FontAwesomeIcon icon="graduation-cap"/>
										</div>
									</div>
								</div>

								<div className="advantages-details">
									<div className="advantages-title">
										<div className="js-goods-contenteditable">Опыт</div>
									</div>
									<div className="advantages-descr">
										<div className="note js-goods-contenteditable js-goods-descr"
										>Значительное количество выигранных дел за период
											моей адвокатской деятельности.
										</div>
									</div>
								</div>

							</div>
						</div>
					</div>
					<div className="col col-sm-12 col-md-4">
						<div
							className="advantages">
							<div className="advantages-item">
								<div
									className="advantages-image-wrap">
									<div className="advantages-image-wrap2 js-goods-image-changebtn-wrapper">
										<div className="icon"><FontAwesomeIcon icon="phone"/>
										</div>
									</div>
								</div>

								<div className="advantages-details">
									<div className="advantages-title">
										<div className="js-goods-contenteditable">Поддержка&nbsp;
										</div>
									</div>
									<div className="advantages-descr">
										<div className="note js-goods-contenteditable js-goods-descr"
										>Мой приоритет быть доступным 24 часа в сутки 7
											дней в неделю для своих доверителей.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col col-sm-12 col-md-4">
						<div
							className="advantages">
							<div className="advantages-item">
								<div
									className="advantages-image-wrap">
									<div className="advantages-image-wrap2 js-goods-image-changebtn-wrapper">
										<div className="icon"><FontAwesomeIcon icon={['fab', 'connectdevelop']}/>
										</div>
									</div>
								</div>
								<div className="advantages-details">
									<div className="advantages-title">
										<div className="js-goods-contenteditable"
										>Сотрудничество
										</div>
									</div>
									<div className="advantages-descr">
										<div className="note js-goods-contenteditable js-goods-descr"
										>Постоянное своевременное информирование клиентов
											о ходе рассмотрения их дела.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	};
}

export default Advantages;