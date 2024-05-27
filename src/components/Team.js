import React from 'react'
import photo from './photo.jpg';
import araujo from './araujo.png';
import balde from './balde.png';
import gavi from './gavi.png';
import roberto from './roberto.png';
import romeu from './romeu.png';
import lopez from './lopez.png';
import pena from './pena.jpg';
import alonso from './alonso.png';
import cancelo from './cancelo.png';
import cubarsi from './cubarsi.png';
import kounde from './kounde.png';
import christensen from './christensen.png';
import inigo from './inigo.png';
import gundo from './gundo.png';
import pedri from './pedri.png';
import fdj from './fdj.png';
import felix from './felix.png';
import lewa from './lewa.png';
import ferran from './ferran.png';
import vitor from './roque.png';
import raphinha from './raphinha.png';
import lamine from './lamine.png';
import ter from './ter.png';
import './Team.css';



const players = [
    { name: "Marc-Andre Ter Stegen", image: ter  },
    { name: "Inaki Pena", image: pena },
    { name: "Alejandro Balde", image: balde },
    { name: "Marcos Alonso", image: alonso },
    { name: "Joao Cancelo", image: cancelo  },
    { name: "Ronald Araujo", image: araujo },
    { name: "Pau Cubarsi ", image: cubarsi  },
    { name: "Jules Kounde", image: kounde },
    { name: "Andreas Christensen", image: christensen },
    { name: "Inigo Martinez", image: inigo },
    { name: "Ilkay Gundogan", image: gundo },
    { name: "Fermin Lopez", image: lopez },
    { name: "Pablo Gavi", image: gavi },
    { name: "Pedri", image: pedri },
    { name: "Sergi Roberto", image: roberto  },
    { name: "Frenkie de Jong", image: fdj },
    { name: "Oriol Romeu", image: romeu },
    { name: "Joao Felix", image: felix },
    { name: "Robert Lewandowski", image: lewa },
    { name: "Ferran Torres", image: ferran },
    { name: "Vitor Roque", image: vitor },
    { name: "Raphinha", image: raphinha },
    { name: "Lamine Yamal", image: lamine },

];

function Team() {
    return (
        <>
            <div className='slicka'>
                <img src={photo} className='pilav'/>

            </div>
            <div className="player-table-container">
                <h1>FC Barcelona 23/24</h1>
                <table className="player-table">
                    <thead>
                        <tr>
                            <th>Player</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr key={index}>
                                <td>{player.name}</td>
                                <td><img src={player.image} alt={player.name} className="player-image" /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Team
