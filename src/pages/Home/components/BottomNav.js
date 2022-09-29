import React from 'react'
import BottomNavTopic from './BottomNavTopic'

const BottomNav = () => {
    const services = [
        {
            "title": "Personal",
            "catalogues": ["Services", "Data", "Devices", "Getting Started"]
        },
        {
            "title": "Business",
            "catalogues": ["Services", "Data", "Devices", "Getting Started"]
        },
        {
            "title": "Investors",
            "catalogues": ["Services", "Data", "Devices", "Getting Started"]
        },
        {
            "title": "Foundation",
            "catalogues": ["Services", "Data", "Devices", "Getting Started"]
        },
        {
            "title": "Events",
            "catalogues": ["Services", "Data", "Devices", "Getting Started"]
        },
        {
            "title": "Support",
            "catalogues": ["Services", "Data", "Devices", "Getting Started"]
        },
    ]
    return (
        <>
            <div className='bottom'>
                {services.map((service, index) => {
                    return (
                        <BottomNavTopic title={service.title} key={index} catalogue={service.catalogues} />
                    );
                })}

            </div>

        </>
    )
}

export default BottomNav