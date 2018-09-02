import {landingPageAPI} from './../endpoints';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const INVALIDATE_POSTS = 'INVALIDATE_POSTS';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const CLEAR_POST = 'CLEAR_POST';
export const REQUEST_SERVICES = 'REQUEST_SERVICES';
export const RECEIVE_SERVICES = 'RECEIVE_SERVICES';

const receivePosts = (json) => {
	return {
		type: RECEIVE_POSTS,
		payload: json.data.data.blogs,
		receivedAt: Date.now()
	};
};

const receivePost = (json) => {
	return {
		type: RECEIVE_POST,
		payload: json.data.data.blog,
		receivedAt: Date.now()
	};
};

const receiveServices = (json)  => {
	return {
		type: RECEIVE_SERVICES,
		payload: json.data.data.serviceses,
		receivedAt: Date.now()
	}
};

const requestPosts = () => {
	return {
		type: REQUEST_POSTS,
	}
};

const requestServices = () => {
	return {
		type: REQUEST_SERVICES,
	}
};

const requestPost = () => {
	return {
		type: REQUEST_POST,
	}
};

const clearPost = () => {
	return {
		type: CLEAR_POST
	}
};

const shouldFetch = (curState) => {
	if (!curState.items) {
		return true;
	} else if (curState.isFetching) {
		return false;
	} else {
		return (Date.now() - curState.lastUpdated) / 1000 > 3600 || curState.didInvalidate;
	}
};

export const fetchPost = (postID) => async (dispatch, getState, api) => {
	dispatch(requestPost());

	const _query = {
		query: `{
            blog(where: {slug: "${postID}"}){
                postTitle
                post
                imageURL {
                	url
                }
            }
        }`
	};

	await api.post(landingPageAPI, _query).then(response => {
		dispatch(receivePost(response))
	}).catch((err) => {
		console.log('error', err);
	})

};

export const fetchPosts = () => async (dispatch, getState, api) => {
	dispatch(requestPosts());
	const _query = {
		query: `{
            blogs {
                postTitle
                shortDescription
                slug
                imageURL {
                	url,
                }
              }
        }`
	};

	await api.post(landingPageAPI, _query).then(response => {
		dispatch(receivePosts(response));
	}).catch((err) => {
		console.log('error', err);
	})
};

export const fetchServices = () => async (dispatch, getState, api) => {
	dispatch(requestServices());
	const _query = {
		query: `{
            serviceses {
                serviceName
                price
                imageURL {
                	url,
                }
              }
        }`
	};

	await api.post(landingPageAPI, _query).then(response => {
		dispatch(receiveServices(response));
	}).catch((err) => {
		console.log('error', err);
	})
};

export const fetchPostsIfNeeded = () => (dispatch, getState) => {
	if (shouldFetch(getState().posts)) {
		dispatch(fetchPosts());
	}
};

export const fetchServicesIfNeeded = () => (dispatch, getState) => {
	if (shouldFetch(getState().services)) {
		dispatch(fetchServices());
	}
};

export const clearPostData = () => (dispatch) => {
	dispatch(clearPost())
};
