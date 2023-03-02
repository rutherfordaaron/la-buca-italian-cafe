import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

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
        zoom={18}
      >
        <Marker position={center} label="la buca" />
      </GoogleMap>
    </div>
  )
}

export default Map;