import React from 'react'
import { useMap, Marker, Popup, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MyMarker = (props) => {
  const map = useMap();
  if (props.lat !== 0) {
    map.setView([props.lat, props.lng], 15)
  }

  delete Icon.Default.prototype._getIconUrl;

  Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  })


  return (
    <div>
      {
        props !== 0 ?
          <Marker
            position={[props.lat, props.lng]}
          >
            <Popup>
              <p>lat: {props.lat}, lng: {props.lng}</p>
            </Popup>
          </Marker>
          : null}
    </div>
  )
}

export default MyMarker