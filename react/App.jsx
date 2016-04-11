import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import Reviews from './pages/Reviews';

import './app.css';

class App extends Component {
  render() {

    return (
      <div>
        <Navbar/>

            {React.cloneElement(this.props.children, {
              key: this.props.location.pathname
            })}
          
        <Footer/>
      </div>
    )
  }
}

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="accommodation" component={Accommodation} />
      <Route path="reviews" component={Reviews} />
    </Route>
  </Router>
), document.getElementById('react'))
