import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import {withRouter} from 'react-router'
import Login from './pages/login'
import Signup from './pages/signup/signup';
import Navbar from './components/navbar'
import pageNotFound from  './pages/pageNotFound';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/conta' component={Signup}/>
        <Route path='/login' component={Login}/>
        <Route component={pageNotFound}/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(App);
