import {RECEIVE_POSTS, REQUEST_POSTS, INVALIDATE_POSTS} from '../actions';

export default function (state = {
	items: null,
	lastUpdated: null,
	isFetching: false,
	didInvalidate: false,
}, action) {
	switch (action.type) {
		case INVALIDATE_POSTS:
			return {...state, didInvalidate: true};
		case REQUEST_POSTS:
			return {...state, isFetching: true};
		case RECEIVE_POSTS:
			return {
				...state,
				isFetching: false,
				didInvalidate: false,
				lastUpdated: action.receivedAt,
				items: action.payload || false
			};

		default:
			return state;
	}
}