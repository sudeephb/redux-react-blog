import { combineReducers } from 'redux'
import BlogList from './reducer-blogs'
import currentBlog from './reducer-current-blog'
import comments from './reducer-current-comments'

export default combineReducers({
	blogs: BlogList,
	currentBlog,
	comments 
})