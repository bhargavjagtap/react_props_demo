import React from 'react'
import cardimg from '../../images/katie-zaferes.png'
import star from '../../images/star.png'
import './card.css'

const Card = () => {
    return (
        <card>
            <img src={cardimg} className='card--img' />
            <div className="card--stats">

                <img src={star} />
                <span>5.0</span>
                <span>(6) * </span>
                <span>USA</span>
                <p>Life lessosns with Katie Zaferas</p>
                <p>From $136 / person</p>
                </div>
        </card>
    )
}

export default Card
