import React from 'react';
import logo from './logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Lamasia from './Lamasia.js';
import History from './History.js';
import team from './team.jpg';
import trci from './trci.jpg';
import barca from './barca.jpg';
import Home from './Home.js';

function Navbar() {
    return (
        <>
            <div className='logosef'>
                <div className='nav-links left'>
                    <Link to="History" className='nav-link'>History</Link>
                    <Link to="Lamasia" className='nav-link'>La Masia</Link>
                </div>
                <div className='logo'>
                    <Link to="Home"><img src={logo} alt="Logo" /></Link>
                </div>
                <div className='nav-links right'>
                    <Link to="Team" className='nav-link'>Team</Link>
                    <Link to="Stadium" className='nav-link'>Stadium</Link>
                </div>
            </div>
            <div className='fcb'>
                <h3>FC BARCELONA</h3>
            </div>


        </>

    )
}

export default Navbar

