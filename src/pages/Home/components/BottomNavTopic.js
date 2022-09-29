import React from 'react'
import { useState } from 'react'

const BottomNavTopic = (props) => {
    const [info, setInfo] = useState([]);
    return (
        <div>
            <h3>{props.title}</h3>
            <div className='bot-catalogue'>
                {
                    props.catalogue ? props.catalogue.map((cat, index) => {
                        return (
                            <h6 key={index}>{cat}</h6>
                        );
                    }) : <h5>Nothing</h5>
                }
            </div>
        </div>
    )
}

export default BottomNavTopic