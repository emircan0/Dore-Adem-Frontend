import React from "react";
import './Footer.css';
import footer_logo from '../Assets/logo 1.png';
import instagram_icon from '../Assets/instagram_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
            </div>
            <ul className="footer-links">
                <li>Şirket</li>
                <li>Ürünler</li>
                <li>Ofisler</li>
                <li>Hakkında</li>
                <li>İletişim</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt=""/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2024 - All Right Reserved</p>
            </div>
        </div>
    )
}

export default Footer