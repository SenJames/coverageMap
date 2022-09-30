import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap, Marker, CircleMarker, Circle, Popup, useMapEvents } from 'react-leaflet';
import ReactLeafletKml from 'react-leaflet-kml';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import KmlFile from './cover.kml'
import { coordinates } from './Coordinates';
import MyMarker from './MyMarker';




const LeafletMap = (props) => {
    const [file, setfile] = useState();
    const [seeMark, setSeeMark] = useState(true);
    // console.log(props);
    // useEffect(() => {

    //     fetch('./cover.kml')
    //         .then(res => res.text())
    //         .then(kmltext => {
    //             console.log('yulzz');
    //             const parser = new DOMParser();
    //             const kml = parser.parseFromString(kmltext, 'text/xml');
    //             // setfile(kml);
    //         })
    //     return () => {
    //         console.log(file)
    //     }
    // }, [])
    /* {file && <ReactLeafletKml kml={file} />} */
    // const zoomy = () => {
    //     map.setView(
    //         [props.lat, props.lng], 14
    //     )
    // }






    delete Icon.Default.prototype._getIconUrl;

    Icon.Default.mergeOptions({
        iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
        iconUrl: require('leaflet/dist/images/marker-icon.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png')
    })

    return (
        <MapContainer center={[6.4500, 3.4333]} zoom={5} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />

            {/* <Marker position={[props.lat, props.lng]} /> */}
            {props.lat !== 0 && <MyMarker lat={props.lat} lng={props.lng} />}
            {
                coordinates.map((cord, index) => {
                    return (
                        <CircleMarker key={index} center={[cord.lng, cord.lat]} pathOptions={{ color: 'yellow' }} radius={20}>
                            <Popup>
                                {cord.description}
                            </Popup>
                        </CircleMarker>
                    )
                }
                )
            }
        </MapContainer>
    )
}

export default LeafletMap