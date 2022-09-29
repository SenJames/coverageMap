import React, { useCallback, useMemo, useRef, useState } from 'react'
import "../components/gen.css";
import { GoogleMap, LoadScript, Circle, Marker, useLoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import Places from './Places';
import MapComponent from './MapComponent';
import MapComponentss from './MapComponentss';
import { AiOutlineLeft, AiOutlineCheck } from "react-icons/ai"
import { Md4GPlusMobiledata, MdOutlineNetworkWifi } from "react-icons/md"
import LeafletMap from './LeafletMap';



const NewBody = () => {
    const [station, setStation] = useState({});
    const [location, setLocation] = useState("");
    const [isLocating, setLocating] = useState(false);
    const [lat, setLat] = useState(6.4500);
    const [lng, setLng] = useState(3.4333);


    // fetch(`https://api.opencagedata.com/geocode/v1/json?q=URI-ENCODED-PLACENAME&key&pretty=1&key=${apiKey}`)


    const handlelocation = (e) => {
        // console.log(e.target.value);
        let vals = e.target.value;

        if (vals.length >= 4) {
            setLocation(e.target.value);
        }

    }

    const handleOnclick = () => {
        // e.preventDefault();
        // let vals = e.target.value;
        console.log("clicked")
        if (location) {
            const urlLocate = encodeURIComponent(location);
            checkGeoCoder(urlLocate);
        }


    }


    const checkGeoCoder = async (address) => {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${address}&pretty=1&key=${process.env.REACT_APP_COVERAGE_KEY}&bounds=3,4,14,15`)

            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data)
                const { lat, lng } = data["results"][0].geometry;

                if (lat) {
                    setLat(lat);
                    setLng(lng);
                }
            })
            .catch(err => {
                console.error(err);
            });
    }


    const mapRef = useRef();

    return (
        <div className='bodyDets'>
            <div className='bodybck'>
                <button style={{ backgroundColor: '#FFD300', width: '70px', padding: "10px", borderRadius: "15px" }}>
                    <p style={{ fontWeight: 'bolder', fontStyle: 'italic' }}><AiOutlineLeft style={{ paddingRight: '4px', fontSize: "" }} />Back</p>
                </button>
            </div>
            <div className='bodyCov'>
                <p className='bodycaption'> Coverage Area </p>
                <p>Check for our coverage area and shops at your location</p>
            </div>
            <div className='bodyLabels'>
                <p style={{ fontWeight: 'bolder', textAlign: 'justify', fontSize: "0.5rem", paddingBottom: "20px" }}>Here's the network status and closest shops in {"{ }"}</p>
                <div className='bodylabelIcons'>
                    <div className='bodylabel1'>
                        <p style={{ marginTop: "5px", paddingTop: "5px", paddingBottom: "5px", width: "30px", fontSize: "15px", fontWeight: 'bolder', backgroundColor: 'black', color: 'yellow', textAlign: 'center' }}>5G</p>
                        <div className='bodylabelText'>
                            <p>Good Indoors and Outdoors</p>
                            <div className='bodylabelInsisdeIcon'>
                                <MdOutlineNetworkWifi size={20} />
                                <AiOutlineCheck size={20} />
                            </div>
                        </div>
                    </div>
                    <div className='bodylabel2'>
                        <p style={{ marginTop: "5px", paddingTop: "5px", paddingBottom: "5px", width: "30px", fontSize: "15px", fontWeight: 'bolder', backgroundColor: 'black', color: 'yellow', textAlign: 'center' }}>5G</p>
                        <div className='bodylabelText'>
                            <p>Good Indoors and Outdoors</p>
                            <div className='bodylabelInsisdeIcon'>
                                <MdOutlineNetworkWifi size={20} />
                                <AiOutlineCheck size={20} />
                            </div>
                        </div>
                    </div>
                    <div className='bodylabel3'>
                        <p style={{ paddingTop: "5px", paddingBottom: "5px", width: "30px", fontSize: "15px", fontWeight: 'bolder', backgroundColor: 'black', color: 'yellow', textAlign: 'center' }}>5G</p>
                        <div className='bodylabelText'>
                            <p>Good Indoors and Outdoors</p>
                            <div className='bodylabelInsisdeIcon'>
                                <MdOutlineNetworkWifi size={20} />
                                <AiOutlineCheck size={20} />
                            </div>
                        </div>
                    </div>
                    <div className='bodylabel4'>
                        <p style={{ paddingTop: "5px", paddingBottom: "5px", width: "30px", fontSize: "15px", fontWeight: 'bolder', backgroundColor: 'black', color: 'yellow', textAlign: 'center' }}>5G</p>
                        <div className='bodylabelText'>
                            <p>Good Indoors and Outdoors</p>
                            <div className='bodylabelInsisdeIcon'>
                                <MdOutlineNetworkWifi size={20} />
                                <AiOutlineCheck size={20} />
                            </div>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className='bodyMap'>
                <div className='controls'>
                    <h3>CHECK HERE</h3>
                    <input className={"controlsSearch"} type={"text"} onChange={handlelocation} onClick={handleOnclick} placeholder="Check your location here" />
                    <button onClick={handleOnclick}>Click Here</button>
                </div>
                <div className='map'>
                    <LeafletMap lat={lat} lng={lng} />
                </div>
            </div>
        </div>
    )
}

export default NewBody