import React, { useCallback, useMemo, useRef, useState } from 'react'
import "../components/gen.css";
import { GoogleMap, LoadScript, Circle, Marker, useLoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import Places from './Places';


const Body = () => {
    const [station, setStation] = useState({});
    const mapRef = useRef();
    // const center = useMemo(() => ({ lat: 6.4500, lng: 3.4333 }), []);
    const center = { lat: 6.4500, lng: 3.4333 };
    const center2 = [
        { lat: 13.1459, lng: 11.8428 },
        { lat: 13.1699, lng: 11.8512 },
        { lat: 13.19761085428888, lng: 11.80461278794864 },
        { lat: 13.1687, lng: 11.8525 },

    ]
    const options = useMemo(() => ({
        mapId: "a7b9cd1eb91f8273",
        disableDefaultUI: true,
        clickableIcons: false,
    }), []);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCgR6HmCOwFXayUdvsAX1bD-RBMzWuSOaA",
        libraries: ["places"]
    })

    const onLoad = useCallback((map) => (mapRef.current = map), []);

    const onPlacesChanged = () => console.log(this.searchBox.getPlaces())

    const onUnmount = circle => {
        console.log('Circle onUnmount circle: ', circle)
    }

    const details = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: false,
        editable: false,
        visible: true,
        radius: 3000,
        zIndex: 1
    }

    if (!isLoaded) return <div> Loading...""</div>


    return (
        <div className='bodyDets'>
            <div className='bodybck'>Back Button</div>
            <div className='bodyCov'>
                <p className='bodycaption'> Coverage Area </p>
                <p>Check for our coverage area and shops at your location</p>
            </div>
            <div className='bodyLabels'>
                Label
            </div>
            <div className='bodyMap'>
                <div className='controls'>
                    <h3>Check Here</h3>
                    <Places setStation={(position) => {
                        setStation(position);
                        mapRef.current?.panTo(position);
                    }} />
                </div>
                <div className='map'>
                    <GoogleMap
                        zoom={10}
                        center={center}
                        mapContainerClassName={"map-container"}
                        options={options}>
                        onLoad={onLoad}

                        {station && <Marker position={{ lat: 6.4500, lng: 3.4333 }} />}

                        <Circle
                            // optional
                            onLoad={onLoad}
                            // optional
                            onUnmount={onUnmount}
                            // required
                            center={center}
                            // required
                            options={details}
                        />
                    </GoogleMap>


                </div>
            </div>
        </div>
    )
}

export default Body