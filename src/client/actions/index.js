import {landingPageAPI} from './../endpoints';

export const fetchPosts = () => async (dispatch, getState, api) => {

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
		dispatch({
			type: 'FETCH_POSTS',
			payload: response.data
		})
	}).catch((err) => {
		console.log('error', err);
	})

};


