import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';

const Cards = () => {
    return (
        <div className='card-out'>
            <div className='cardContainer1'>
                <p className='cardTitle'> Getting Started</p>
                <h3 className='cardInset'>Internet Settings</h3>
                <div className='cardbtn'>
                    <p>ReadMore</p>
                    <div className={'cardIcon'}><AiOutlineRight /></div>
                </div>
            </div>
        </div>
    )
}

export default Cards