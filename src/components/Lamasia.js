import React from 'react';
import './Lamasia.css';
import la from './la.png.jpg';
import messi from './messi.jpg';
import iniesta from './iniesta.jpg';
import xavi from './xavi.jpg';
import inaki from './pena.jpg';
import balde from './balde.png';
import araujo from './araujo.png';
import romeu from './romeu.png';
import roberto from './roberto.png';
import gavi from './gavi.png';
import lopez from './lopez.png';

const players = [
  { name: 'Inaki Pena', position: 'GK', image: inaki },
  { name: 'Alejandro Balde', position: 'LB', image: balde },
  { name: 'Ronald Araujo', position: 'CB', image: araujo },
  { name: 'Oriol Romeu', position: 'CDM', image: romeu },
  { name: 'Sergi Roberto', position: 'CM', image: roberto },
  { name: 'Pablo Gavi', position: 'CM', image: gavi },
  { name: 'Fermin Lopez', position: 'CAM', image: lopez },
];

function Lamasia() {
  return (
    <div className='pocetna'>
      <div className='slika'>
        <img src={la} className='hero' />
      </div>
      <div className='text-container'>
        <div className='text'>
          <h2>La Masia</h2>
          <p>is a term used for FC Barcelona's youth academy. The academy includes more than 300 young players. It has been an instrumental factor in Barcelona's European success, and produced several world class players in the early 2000s.</p>
        </div>
        <div className='text_dva'>
          <p>In 2010, La Masia became the first youth academy to have trained all three finalists for the Ballon d'Or in a single year: Andrés Iniesta, Lionel Messi and Xavi.</p>
        </div>
      </div>
      <div className='slike-container'>
        <img src={xavi} className='xavi' />
        <img src={messi} className='xavi' />
        <img src={iniesta} className='xavi' />
      </div>
      <div className='current'>
        <h2>Current First Team Players From La Masia</h2>
        <div className="table-container">
          <table className="players-table">
            <thead>
              <tr>
                <th>Player</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {players.map((player, index) => (
                <tr key={index}>
                  <td className='igraci'>{player.name} </td>
                  <td><img src={player.image} alt={player.name} className="player-image" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Lamasia
