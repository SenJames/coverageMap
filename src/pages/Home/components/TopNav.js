import React from 'react';
import "../components/gen.css";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import Logo from '../../../images/mtnlogo.jpg';

const TopNav = () => {
    return (
        <div className='navContainer'>
            <div>
                <img alt="mtn logo" src={Logo} width={"70px"} />
            </div>
            <div className='navs-top'>
                <div className='navBut'>
                    <p>Personal</p>
                    <div className='icon'>
                        <p><AiOutlineDown /></p>
                    </div>
                </div>
                <div className='navBut'>
                    <p>Personal</p>
                    <div className='icon'>
                        <p><AiOutlineDown /></p>
                    </div>
                </div>
                <div className='navBut'>
                    <p>Personal</p>
                    <div className='icon'>
                        <p><AiOutlineDown /></p>
                    </div>
                </div>
                <div className='navBut'>
                    <p>Personal</p>
                    <div className='icon'>
                        <p><AiOutlineDown /></p>
                    </div>
                </div>
                <div className='navBut'>
                    <p>Personal</p>
                    <div className='icon'>
                        <p><AiOutlineDown /></p>
                    </div>
                </div>
                <div className='navBut'>
                    <p>Personal</p>
                    <div className='icon'>
                        <p><AiOutlineDown /></p>
                    </div>
                </div>
            </div>
            <div className='searchtab'>
                <AiOutlineSearch size={30} />
                <input type="text" name="search" className='searchIcon' />
            </div>
        </div>
    )
}

export default TopNav