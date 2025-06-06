import React from 'react'
import './Hero.css'
import image from '../../assets/profile-img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={image} className='profile-img' alt=""/>
        <h1><span>I'm Mushfiqur Zarif,</span>
        frontend developer based in BD.</h1>
         <p>I am a frontend developer from Dhaka, BD with 3 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
         <div className="hero-action">
          <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me </AnchorLink></div>
          <div className="hero-resume">My resume</div>
         </div>
    </div>
  )
}

export default Hero