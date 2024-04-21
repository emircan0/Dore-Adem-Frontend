import React from "react";
import './Offers.css'
import exclucive_image from '../Assets/deneme3.png'

const Offers = () => {
    return(
        <div className="offers">
    <div className="offers-img">
        <img src={exclucive_image} alt="" />
        <div className="offers-content">
            <div className="offers-baslik">
                <h1>Senin İçin Öneriler</h1>
                <p>En Çok Satanlar</p>
                <button>Keşfet</button>
            </div>
        </div>
    </div>
</div>

    )
}

export default Offers