import React, { Component } from 'react';

export default class CreateBlog extends Component{
	render(){
		return(
			<div>
				<form onSubmit = {this.onClickListener}>
					<b>Title:</b> <input required type = "text" />
					<br />
					<hr />
					<b>Body:</b> <br /> <textarea required rows = "7" cols = "80" />
					<br />
					<button type = "submit"> Add Blog </button>
				</form> 
			</div>
		)
	}
}