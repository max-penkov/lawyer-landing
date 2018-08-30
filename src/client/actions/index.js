import {landingPageAPI} from './../endpoints';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const INVALIDATE_POSTS = 'INVALIDATE_POSTS';
export const REQUEST_POST = 'REQUEST_POST';
export const RECEIVE_POST = 'RECEIVE_POST';
export const CLEAR_POST = 'CLEAR_POSR';

const receivePosts = (json) => {
	return {
		type: RECEIVE_POSTS,
		payload: json.data.data.allBlogs,
		receivedAt: Date.now()
	};
};

const receivePost = (json) => {
	return {
		type: RECEIVE_POST,
		payload: json.data.data.Blog,
		receivedAt: Date.now()
	};
};

const requestPosts = () => {
	return {
		type: REQUEST_POSTS,
	}
};

const requestPost = () => {
	return {
		type: REQUEST_POST,
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

export const fetchPost = (postID) => async (dispatch, getState, api) => {
	dispatch(requestPost());

	const _query = {
		query: `{
            Blog(slug: "${postID}"){
                postTitle
                post
                imageURL
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
