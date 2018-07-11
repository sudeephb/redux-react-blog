import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class blogDetail extends Component{
	render(){
		if(!this.props.blog){
			return <div>No Blog selected </div>
		}
		return(
			<div>
			<h3>{this.props.blog.title}</h3>
			<p>{this.props.blog.body}</p>
			</div>
		)
	}
}



function mapStateToProps(state){
	return{
		blog: state.currentBlog
	}
}


export default connect(mapStateToProps)(blogDetail)