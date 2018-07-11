import React, { Component } from 'react';
import BlogList from './containers/blog-list'
import BlogDetail from './containers/blog-detail'
import CreateBlog from './containers/create-blog'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

export default class App extends Component {
  render() {
    return (
      <div>
      	<Router>
      		<Switch>
      			<Route exact path = '/' component = {BlogList} />
      			<Route exact path = '/detail' component = {BlogDetail} />
            <Route exact path = '/create' component = {CreateBlog} />
      		</Switch>
      	</Router>
      </div>
    );
  }
}
