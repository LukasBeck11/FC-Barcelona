import React from 'react'
import logo from './logo.png';
import './Home.css';
import { Link } from 'react-router-dom';
import Lamasia from './Lamasia.js';
import team from './team.jpg';
import trci from './trci.jpg';
import barca from './barca.jpg';
function Home() {
    return (
        <>
            <div className='pocetna'>
                <img src={barca} className='hero'></img>
                <div className='kontenjer'>
                    <div className='lamine'>
                        <h1>LAMINE</h1>
                        <h2>YAMAL</h2>
                    </div>

                </div>
                <div className='talent'>
                    <p className='full-width'>Our Latest <Link to="Lamasia" className='lamasia'>La Masia</Link> Talent</p>
                </div>
                <div className='team-container'>
                    <img src={team} className='teamslika' />
                    <img src={trci} className='trcislika' />
                    <div className='team-info'>
                        <h3 className='jure'>Meet The <Link to="Team" className='ekipa'>TEAM</Link></h3>
                    </div>
                </div>
                <footer className="footer">
                    <div className="footer-content">
                        <p>© 2024 FC BARCELONA</p>
                        <ul className="footer-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </>

    )
}

export default Home
