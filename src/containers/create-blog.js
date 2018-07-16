import React, { Component } from 'react';
import { createBlog } from '../action-creators/index'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class CreateBlog extends Component{
	constructor(props){
		super(props);
		this.title = ""
		this.body = ""
		this.state = {
			created: false
		}
	}

	onClickListener = (e)=>{
	e.preventDefault()
	this.props.createBlog(this.title.value, this.body.value)
	this.setState({created:true})
	}
	
	render(){
		if(this.state.created){
			return <Redirect to = '/' />
		}
		return(
			<div>
				<form onSubmit = {this.onClickListener}>
					<b>Title:</b> <input required type = "text" ref = {title => this.title = title} />
					<br />
					<hr />
					<b>Body:</b> <br /> <textarea required rows = "7" cols = "80" ref = {body => this.body = body} />
					<br />
					<button className = "btn btn-primary" type = "submit"> Add Blog </button>
				</form> 
			</div>
		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ createBlog },dispatch)
}

export default connect(null, mapDispatchToProps)(CreateBlog)

