import React from "react";
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/deneme.png'
const Hero = () => {
    return(
        <div className="hero">
    <div className="hero-img">
        <img src={hero_image} alt="" />
        <div className="hero-content">
        <div className="hero-baslik">
            <h1>Her Sezonu En Güzel Çiçekleri</h1>
            </div>
            <div>
                <p></p>
            </div>
            <div className="hero-latest-btn">
                <div>Keşfet</div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
    </div>
</div>

    )
}

export default Hero