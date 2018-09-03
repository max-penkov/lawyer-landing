import React, {Component} from "react";

// Import React Table
import ReactTable from "react-table";
import {Helmet} from "react-helmet";
import InternalTextBanner from "../components/banners/internalTextBanner";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {fetchServices, fetchServicesIfNeeded} from "../actions";
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBusinessTime} from "@fortawesome/free-solid-svg-icons";


// import "react-table/react-table.css";

class ServicesPage extends Component {

	componentDidMount() {
		this.props.fetchServicesIfNeeded();
	}

	head() {
		return (
			<Helmet bodyAttributes={{class: "servicesPage"}}>
				<title>{`Услуги и расценки - Пикунов Дмитрий Викторович`}</title>
			</Helmet>
		);
	}

	// _head() {
	// 	var columns = _.map(this.props.columns, function(colName) {
	// 		return (
	// 			<th>{colName}</th>
	// 		);
	// 	});
	// 	return (
	// 		<tr>{columns}</tr>
	// 	);
	// }
	//
	// _rows() {
	// 	var _this = this;
	// 	return _.map(_this.props.rows, function(row) {
	// 		var values = _.map(_this.props.columns, function(colName, colKey) {
	// 			return (
	// 				<td pageData-label={colName}>{row[colKey]}</td>
	// 			);
	// 		})
	// 		return (
	// 			<tr>{values}</tr>
	// 		);
	// 	})
	// }
	//
	// render() {
	// 	return (
	// 		<table className="responsive-table">
	// 			<thead>
	// 			{this._head()}
	// 			</thead>
	// 			<tbody>
	// 			{this._rows()}
	// 			</tbody>
	// 		</table>
	// 	);
	// }

	render() {
		const {isFetching, pageData} = this.props;
		if (!pageData == false) {
			return (
				<div>
					{this.head()}
					<InternalTextBanner Heading="Услуги и расценки" wrapperClass="services"/>
					<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}
											 transitionAppearTimeout={5000}
											 transitionEnter={false} transitionLeave={false}>
						<div className="main container">
							<p className="mb-5"> На этой странице приведены расценки за совершение разового действия
								(это
								тот случай, когда приходит человек и говорит: я сам все знаю, мне лишь нужно…). Вот ниже
								как
								раз расценки для тех, кто сам всё знает. Соответственно, с теми, кто не знает и приходит
								за
								юридической помощью, мы оговариваем гонорар исходя из сложности дела, и тех временных
								затрат, которые оно потребует. В любом случае, за основу берутся нижеприведенные
								расценки.</p>
							<ReactTable
								data={pageData}
								columns={[
									{
										Header: () => (
											<div style={{
												padding: "5px",
												borderRadius: "2px",
												opacity: 0.8
											}}>
												<FontAwesomeIcon icon="business-time" style={{marginRight: "5px"}}/>Услуга
											</div>
										),
										accessor: 'serviceName' // String-based value accessors!
									},
									{
										Header: () => (
											<div style={{
												padding: "5px",
												borderRadius: "2px",
												opacity: 0.8
											}}>
												<FontAwesomeIcon icon="dollar-sign" style={{marginRight: "5px"}}/>Цена
											</div>
										),
										maxWidth: '150',
										accessor: 'price',
										Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
									},
								]}
								className="-striped -highlight"
								showPagination={false}
								showPaginationBottom={false}
							/>
						</div>
					</ReactCSSTransitionGroup>
				</div>
			)
		}
		if (pageData == null) {
			return (
				<div>
					{this.head()}
					<InternalTextBanner Heading="Услуги и расценки" wrapperClass="services"/>
					<ReactCSSTransitionGroup transitionName="anim" transitionAppear={true}
											 transitionAppearTimeout={5000}
											 transitionEnter={false} transitionLeave={false}>
						<div className="main anim-appear container">
							{isFetching &&
							<div className="icon">
								<FontAwesomeIcon icon="spinner" spin/>
							</div>}
						</div>
					</ReactCSSTransitionGroup>
				</div>
			)
		}
	}
}

function mapStateToProps(state) {
	return {
		pageData: state.services.items,
		isFetching: state.services.isFetching
	};

}

function loadData(store) {
	return store.dispatch(fetchServices());
}

export default {
	loadData,
	component: connect(mapStateToProps, {fetchServices, fetchServicesIfNeeded})(ServicesPage)
};