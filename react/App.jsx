import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import Facilities from './pages/Facilities';
import Parking from './pages/Parking';
import Reviews from './pages/Reviews';
import Location from './pages/Location';

import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Carousel />
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
      <Route path="facilities" component={Facilities} />
      <Route path="parking" component={Parking} />
      <Route path="reviews" component={Reviews} />
      <Route path="location" component={Location} />
    </Route>
  </Router>
), document.getElementById('react'))
