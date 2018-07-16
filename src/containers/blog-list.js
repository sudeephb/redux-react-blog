import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectBlog, getBlogs } from '../action-creators/index'
import { bindActionCreators } from 'redux';

class BlogList extends Component{

	 componentDidMount(){
	 	this.props.getBlogs('http://localhost:8000/blogs')
	 }
	render(){
		if(!this.props.blogs){
			return <div>No blogs to show</div>
		}
		return(
			<div>
			<ul className = "list-group">
				<Link to = '/detail'>
					{this.props.blogs.data.map(blog => (
						<li className = "list-group-item list-group-item-action"
						 key = {blog.id}
						 onClick = {() => this.props.selectBlog(blog)}>
							{blog.title}
						</li>
						))}
				</Link>
			</ul>
			<Link to = '/create'><button type = "submit" className = "btn btn-success">Add new Blog</button></Link>
			</div>
			)
	}
}

function mapStateToProps(state){
	return{
		blogs: state.blogs
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({selectBlog: selectBlog, getBlogs: getBlogs}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)