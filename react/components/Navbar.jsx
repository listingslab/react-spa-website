import React from 'react';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

export default class Navbar extends React.Component {

  render() {
    return (

      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <Link className="navbar-brand" to="/">
              <img height="25" width="25" src="./img/listingslab.png" />
            </Link>
  
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/">Home</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Accommodation <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="/accommodation">The House</a></li>
                  <li><a href="/facilities">Facilities</a></li>
                  <li><a href="/parking">Parking</a></li>
                </ul>
              </li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/location">Location</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
