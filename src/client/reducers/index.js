import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import posts from './postsReducer';
import post from './postReducer';

export default combineReducers({
	form: formReducer,
	posts,
	post
});