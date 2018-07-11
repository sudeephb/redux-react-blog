import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectBlog } from '../action-creators/index'
import { bindActionCreators } from 'redux';



class BlogList extends Component{
	render(){
		return(
			<div>
			<ul className = "list-group">
				<Link to = '/detail'>
					{this.props.blogs.map(blog => (
						<li className = "list-group-item list-group-item-action"
						 key = {blog.title}
						 onClick = {() => this.props.selectBlog(blog)}>
							{blog.title}
						</li>
						))}
				</Link>
			</ul>
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
	return bindActionCreators({selectBlog: selectBlog}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogList)