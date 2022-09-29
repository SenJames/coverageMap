import React from 'react'
import Cards from './Cards'

const AdsComponent = () => {
    return (
        <div className='adsCom'>
            <div className='adsComHold'>
                <div className='adsComCont'>
                    <Cards />
                </div>
                <div className='adsComCont'>
                    <Cards />
                </div>
                <div className='adsComCont'>
                    <Cards />
                </div>
                <div className='adsComCont'>
                    <Cards />
                </div>
            </div>
        </div>
    )
}

export default AdsComponent