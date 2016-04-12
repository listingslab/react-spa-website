import React from 'react';

export default class Carousel extends React.Component {

  render() {
    return (

      <div id="theCarousel" className="carousel slide" data-ride="carousel">
      
      <ol className="carousel-indicators">
        <li data-target="#theCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#theCarousel" data-slide-to="1"></li>
        <li data-target="#theCarousel" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner" role="listbox">

        <div className="item active">
          <img className="first-slide" src="/img/carousel/FrontYardViews.jpg" alt="Longview Lodge" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Example headline.</h1>
              <p>lorem ipsum</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            </div>
          </div>
        </div>

        <div className="item">
          <img className="another-slide" src="/img/carousel/FrontViews.jpg" alt="Longview Lodge" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Example headline.</h1>
              <p>Note: If you're viewing this page uttons onue to web browser security rules.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            </div>
          </div>
        </div>

        <div className="item">
          <img className="second-slide" src="/img/carousel/OverlookingLounge.jpg" alt="Second slide" />
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>

      </div>
      <a className="left carousel-control" href="#theCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#theCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

    )
  }
}
