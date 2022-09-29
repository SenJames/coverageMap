import React from 'react'
import { GoogleMap, LoadScript, Marker, Circle, StandaloneSearchBox } from '@react-google-maps/api';

const MapComponent = () => {

    const center2 = [
        { lat: 13.1459, lng: 11.8428 },
        { lat: 13.1699, lng: 11.8512 },
        { lat: 13.19761085428888, lng: 11.80461278794864 },
        { lat: 13.1687, lng: 11.8525 },
    ]

    const onLoad = marker => {
        console.log('marker: ', marker)
    }

    const onPlacesChanged = () => console.log(this.searchBox.getPlaces());

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyBLFZfVvlKLjBLpxLwhPhSVbZQJohLOHAk"
            // googleMapsApiKey="AIzaSyCgR6HmCOwFXayUdvsAX1bD-RBMzWuSOaA"
            libraries={["places"]}
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker position={position} onLoad={onLoad} />
            </GoogleMap>
        </LoadScript >
    )
}

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

export default MapComponent

// """
// {
//     center2.map((cent, index) => {
//         return (
//             <Marker key={index} position={{ lat: cent.lat, lng: cent.lng }} />
//         )
//     })
// }
// """