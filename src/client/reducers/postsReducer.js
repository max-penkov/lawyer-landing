import {RECEIVE_POSTS, REQUEST_POSTS, INVALIDATE_POSTS} from '../actions';

export default function (state = {
	lastUpdated: null,
	isFetching: false,
	didInvalidate: false,
	items: null
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
				items: action.payload.length > 0 ? action.payload : null
			};

		default:
			return state;
	}
}