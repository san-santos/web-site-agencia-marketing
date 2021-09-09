import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Mapscale } from './styled';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Gmap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <Mapscale>
        <GoogleMapReact
          bootstrapURLKeys={'Key'}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </Mapscale>
    );
  }
}

export default Gmap;