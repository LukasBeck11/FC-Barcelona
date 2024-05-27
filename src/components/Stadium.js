import React from 'react'
import camp from './camp.jpg';
import './Stadium.css';
function Stadium() {
    return (
        <>

            <div className='camp'>
                <img src={camp} className='stadion' />

            </div>
            <div className='stadium'>
                <h2> The official stadium of FC Barcelona is Camp Nou</h2>
                <iframe
                    title="Camp Nou Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.656553903055!2d2.121881915239477!3d41.38089677926481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f0c9e69a05%3A0x736872f5ffac7a2!2sCamp%20Nou!5e0!3m2!1sen!2sus!4v1642218043660!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>            </div>
        </>
    )
}

export default Stadium
