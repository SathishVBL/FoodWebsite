import React from 'react';
import GoogleMapReact from 'google-map-react';

// Custom marker component
const Marker = () => (
  <div style={{
    color: 'red',
    fontSize: '24px',
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
  }}>
    📍
  </div>
);

const Location = () => {
  const mapStyles = {        
    height: "250px",
    width: "100%"
  };
  
  const myLocation = {
    lat: 12.228628,
    lng: 79.066544
  };


  var marker = new GoogleMapReact.maps.Marker({
    position: myLocation,
    title: 'Hello World!'
});


  return (
    <div style={mapStyles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDW4ozoWAgjflgb8O0-VGetxMQW7U7r67A' }}
        defaultCenter={myLocation}
        defaultZoom={13}
        onGoogleApiLoaded={({map, maps}) => this.renderMarkers()}
      >
        <Marker lat={myLocation.lat} lng={myLocation.lng} />
      </GoogleMapReact>
    </div>
  );
}

export default Location;
