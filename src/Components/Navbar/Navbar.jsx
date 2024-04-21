import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo 1.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {
    const [menu, setMenu] = useState("anaSayfa");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt='' />
            <ul ref={menuRef} className='nav-menu'>
                <li onMouseEnter={() => { setMenu("anaSayfa") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Ana Sayfa</Link>
                </li>
                <li onMouseEnter={() => { setMenu("buket") }}>
                    <Link style={{ textDecoration: 'none' }} to='/buket'>Gönderim Amacı</Link>
                    {menu === "buket" ? <div className="sub-menu">
                        <Link to='/dogumGünü'>Doğum Günü</Link>
                        <Link to='/yeniIs'>Yeni İş Çiçekleri</Link>
                        <Link to='/yeniBebek'>Yeni Bebek Çiçekleri</Link>
                        <Link to='/acilisVeToren'>Açılış ve Tören Çiçekleri</Link>
                        <Link to='/yilDonumu'>Yıl Dönümü Çiçekleri</Link>
                        <Link to='/gecmisOlsun'>Geçmiş Olsun Çiçekleri</Link>
                    </div> : null}
                </li>
                <li onMouseEnter={() => { setMenu("cicekler") }}>
                    <Link style={{ textDecoration: 'none' }} to='/orkide'>Çiçekler</Link>
                    {menu === "cicekler" ? <div className="sub-menu">
                        <Link to='/buket'>Çiçek Buketleri</Link>
                        <Link to='/orkide'>Orkide</Link>
                        <Link to='/gul'>Güller</Link>
                        <Link to='/saksi'>Saksı Çiçekleri</Link>
                        <Link to='/papatya'>Papatya</Link>
                        <Link to='/lilyum'>Lilyum</Link>
                        
                    </div> : null}
                </li>
                <li onMouseEnter={() => { setMenu("bitki") }}>
                    <Link style={{ textDecoration: 'none' }} to='/bitki'>Taze Bitki</Link>
                    {menu === "bitki" ? <div className="sub-menu">
                        <Link to='/salon'>Salon Bitkileri</Link>
                        <Link to='/balkon'>Balkon Bitkileri</Link>
                        <Link to='/ofis'>Ofis Bitkileri</Link>
                        <Link to='/disMekan'>Dış Mekan Bitkileri</Link>
                        <Link to='/icMekan'>İç Mekan Bitkileri</Link>
                        <Link to='/bahce'>Bahçe Bitkileri</Link>
                    </div> : null}
                </li>
                <li onMouseEnter={() => { setMenu("organizasyon") }}>
                    <Link style={{ textDecoration: 'none' }} to='/organizasyon'>Organizasyonlar</Link>
                   
                </li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                    ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}>Çıkış Yap</button>
                    : <Link to='/login'><button>Giriş</button></Link>}
                <Link to='/cart'> <img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;
