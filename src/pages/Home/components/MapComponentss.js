import React from 'react'
// import { GoogleMap, LoadScript, Marker, Circle, StandaloneSearchBox } from '@react-google-maps/api';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MapComponentss = withScriptjs(withGoogleMap((props) =>

    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
))



const containerStyle = {
    width: '800px',
    height: '100%'
};

const center = {
    lat: 6.4500,
    lng: 3.4333
}
const position = {
    lat: 6.4500,
    lng: 3.4333
}

export default MapComponentss

// """
// {
//     center2.map((cent, index) => {
//         return (
//             <Marker key={index} position={{ lat: cent.lat, lng: cent.lng }} />
//         )
//     })
// }
// """