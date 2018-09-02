import {REQUEST_SERVICES, RECEIVE_SERVICES} from '../actions';

export default function (state = {
	lastUpdated: null,
	isFetching: false,
	items: null
}, action) {
	switch (action.type) {
		case REQUEST_SERVICES:
			return {...state, isFetching: true};
		case RECEIVE_SERVICES:
			return {
				...state,
				isFetching: false,
				lastUpdated: action.receivedAt,
				items: action.payload.length > 0 ? action.payload : null
			};

		default:
			return state;
	}
}