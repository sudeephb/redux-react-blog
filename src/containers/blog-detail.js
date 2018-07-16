import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteBlog, getComments } from '../action-creators/index' 
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router';

class blogDetail extends Component{
	constructor(props){
		super(props);
		this.state = {
			deleted: false
		}
	}

	componentDidMount(){
		if(this.props.blog)
			this.props.getComments('http://localhost:8000/comments', this.props.blog.id)
	}
	onDeleteBlog(){
		this.props.deleteBlog('http://localhost:8000/blogs',this.props.blog)
		this.setState({deleted: true})
	}

	render(){
		if(this.state.deleted){
			return (<Redirect to = '/' />)
		}
		if(!this.props.blog){
			return (<Redirect to = '/' />)
		}
		let comments = []
		if(this.props.comments){
			// if(this.props.comments.data.blogId === this.props.blog.id)
			// 	comments = this.props.comments.data
			console.log('Comments: ', comments)
		}

		return(
			<div>
			<h3>{this.props.blog.title}</h3>
			<p>{this.props.blog.body}</p>
			<hr />
			<h4><u>Comments</u></h4>


			<hr />
			<button type = "submit" className = "btn btn-danger" onClick = {() => this.onDeleteBlog()}>Delete this blog </button> 
			</div>
		)
	}
}



function mapStateToProps(state){
	return{
		blog: state.currentBlog,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({deleteBlog: deleteBlog, getComments: getComments},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(blogDetail)