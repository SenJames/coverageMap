import React from 'react'
import "../Home/Home.css"
import AdsComponent from './components/AdsComponent'
import Body from './components/Body'
import NewBody from './components/NewBody'
import BottomNav from './components/BottomNav'
import TopNav from './components/TopNav'

const HomeMain = () => {
    return (
        <div className='Main'>
            <div className='TopNav'>
                <TopNav />
            </div>
            <div className='MainBody'>
                <NewBody />
            </div>
            <div className='lowerFooter'>
                <AdsComponent />
            </div>
            <div className='footer'>
                <BottomNav />
            </div>
        </div>

    )
}

export default HomeMain

