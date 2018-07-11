import { combineReducers } from 'redux'
import BlogList from './reducer-blogs'
import currentBlog from './reducer-current-blog'

export default combineReducers({
	blogs: BlogList,
	currentBlog
})