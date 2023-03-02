import { GoogleMap, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 45.52349338481838,
  lng: -122.63712086327179
}

const Map = () => {
  return (
    <div className="h-[90vw]">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  )
}

export default Map;