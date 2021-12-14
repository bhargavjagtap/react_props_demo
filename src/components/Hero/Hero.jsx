import React from 'react'
import './hero.css'
import heroimg from '../../images/photo-grid.png'

const Hero = () => {
    return (
      <hero>
        <img className="hero--image" src={heroimg} alt="photogrid" />
        <h1 className="hero--title">Online Experiences</h1>
        <p className="hero--para">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </hero>
    );
}

export default Hero
