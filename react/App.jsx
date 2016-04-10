import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Page2 from './pages/Page2';

import './app.css';

class App extends Component {
  render() {

    return (
      <div>
        <Navbar/>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="example"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}
          </ReactCSSTransitionGroup>
        <Footer/>
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About} />
      <Route path="page2" component={Page2} />
    </Route>
  </Router>
), document.getElementById('react'))
