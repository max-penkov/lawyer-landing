import {landingPageAPI} from './../endpoints';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const INVALIDATE_POSTS = 'INVALIDATE_POSTS';

const receivePosts = (json) => {
	return {
		type: RECEIVE_POSTS,
		payload: json.data.data.allBlogs,
		receivedAt: Date.now()
	};
};

const requestPosts = () => {
	return {
		type: REQUEST_POSTS,
	}
};

const shouldFetchPosts = (state) => {
	const posts = state.posts;
	if (!posts.items) {
		return true;
	} else if (posts.isFetching) {
		return false;
	} else {
		return (Date.now() - posts.lastUpdated) / 1000 > 3600 || posts.didInvalidate;
	}
};

export const fetchPosts = () => async (dispatch, getState, api) => {
	dispatch(requestPosts());
	const _query = {
		query: `{
            allBlogs {
                postTitle
                shortdescription
                slug
                imageURL
              }
        }`
	};

	await api.post(landingPageAPI, _query).then(response => {
		dispatch(receivePosts(response));
	}).catch((err) => {
		console.log('error', err);
	})
};

export const fetchPostsIfNeeded = () => (dispatch, getState) => {
	if (shouldFetchPosts(getState())) {
		dispatch(fetchPosts());
	}
};
