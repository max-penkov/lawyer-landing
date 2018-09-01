import {RECEIVE_POST, REQUEST_POST, CLEAR_POST} from '../actions';

export default function (state = {
	lastUpdated: null,
	isFetching: false,
	didInvalidate: false,
	item: null
}, action) {
	switch (action.type) {
		case REQUEST_POST:
			return {...state, isFetching: true};
		case RECEIVE_POST:
			return {
				...state,
				isFetching: false,
				didInvalidate: false,
				lastUpdated: action.receivedAt,
				item: action.payload || false
			};

		default:
			return state;
	}
}