import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import posts from './postsReducer';
import post from './postReducer';
import services from './servicesReducer';

export default combineReducers({
	form: formReducer,
	posts,
	post,
	services
});