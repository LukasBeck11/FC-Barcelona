import React from 'react'
import retro from './retro.jpg';
import './History.css'
import laliga from './laliga.jpg';
import champions from './champions.jpg';
import fifa from './fifa.jpg';
import copa from './copa.jpg';
import messi from './mehsi.jpg';
import maradona from './maradona.jpg';
import ronaldo from './ronaldo.jpg';
import neymar from './neymar.jpg';
import ronaldinho from './ronaldinho.jpg';
import { Link } from 'react-router-dom';
import Home from './Home.js';

const trophies = [
    { name: 'La Liga', image: laliga },
    { name: 'UEFA Champions League', image: champions },
    { name: 'FIFA Club World Cup', image: fifa },
    { name: 'Copa Del Rey', image: copa },

];


function History() {
    return (
        <div className='history'>
            <img src={retro} className='retro' />
            <div className='povjest'>
                <div className="history-container">
                    <div className='prvi'>
                        <p>Founded in 1899 by a group of Swiss, Catalan, German, and English footballers led by Joan Gamper, the club has become a symbol of Catalan culture and Catalanism,
                            hence the motto "Més que un club" ("More than a club").</p>
                    </div>
                    <div className='drugi'>
                        <p>The official Barcelona anthem is the "Cant del Barça", written by Jaume Picas and Josep Maria Espinàs.
                            Barcelona traditionally play in dark shades of blue and garnet stripes, hence nicknamed Blaugrana.</p>
                    </div>
                </div>
                <div className='treci'>
                    <p>Honours</p>
                </div>
                <div className="table-container">
                    <table className="trophies-table">
                        <thead>
                            <tr>
                                <th>Trophy</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trophies.map((trophy, index) => (
                                <tr key={index}>
                                    <td className='trofeji'>{trophy.name} </td>
                                    <td><img src={trophy.image} alt={trophy.name} className="trophy-image" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h2 className='pozadina'>Best players to play for <Link to="Home" className="kuca">Barcelona FC</Link> </h2>
                <div className='slikice-container'>
                    <img src={messi} className='suii' />
                    <img src={maradona} className='suii' />
                    <img src={ronaldo} className='suii' />
                    <img src={ronaldinho} className='suii' />
                    <img src={neymar} className='suii' />

                </div>
            </div>


        </div>
    )
}

export default History
