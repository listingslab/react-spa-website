import React from 'react';

export default class Location extends React.Component {

  render() {
    return (
      
      <div className="container page">
        <div className="page-header">
              <h1>Location</h1>
        </div>

        <p className="lead">
          Longview Lodge is located in American River on Kangaroo Island. 
          The Island can be accessed from Cape Jervis via the <a title="Sealink" href="https://www.sealink.com.au/kangaroo-island-accommodation/462-Longview-Lodge" target="_blank">Sealink Ferry Service</a>
        </p>
        <p className="lead">
          After arriving at Penneshaw, enjoy a beautiful scenic drive past Pelican Lagoon to Longview Lodge in American River.
        </p>
        <p className="lead">
          <iframe className="map" src="https://www.google.com/maps/d/embed?mid=zJgP7ZQV2PjU.kbnvByLU5k4s" width="100%" height="480"></iframe>
        </p>

      </div>
    )
  }
}