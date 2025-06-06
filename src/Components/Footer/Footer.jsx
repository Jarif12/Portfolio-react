import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <svg width="120" height="57" viewBox="0 0 120 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68 42.39C68 41.3438 68.9096 40.53 69.9493 40.6459L101.251 44.136C105.227 44.5794 108.591 41.226 108.161 37.2483C107.713 33.1161 103.434 30.5622 99.5844 32.1306L70.4171 44.0151C69.2629 44.4854 68 43.6363 68 42.39Z" fill="url(#paint0_linear_2205_14)"/>
<defs>
<linearGradient id="paint0_linear_2205_14" x1="219.1" y1="39.9983" x2="202.599" y2="91.4037" gradientUnits="userSpaceOnUse">
<stop stop-color="#DF8908"/>
<stop offset="1" stop-color="#B415FF"/>
</linearGradient>
</defs>
<text x="13" y="44" font-family="Share Tech" letterSpacing={3} font-size="42" fill="white" >Zarif</text>
</svg>
<p>I am a frontend developer from Dhaka, BD with 3 years of experience in multiple companies like Microsoft, Tesla and Apple.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' name="email" />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">© 2025 Mushfiqur Zarif. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
