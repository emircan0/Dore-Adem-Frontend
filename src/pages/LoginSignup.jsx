import React, { useEffect, useState } from 'react';
import './CSS/LoginSignup.css';

const LoginSignup = () => {

  const [state, setState] = useState("Üye Ol");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("Giriş Fonksiyonu Çalıştı", formData);
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
  }

  const signup = async () => {
    console.log("Üye Ol Fonksiyonu Çalıştı", formData);
    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
  }

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>{state}</h1>
        <div className='loginsignup-fields'>
          {state === "Üye Ol" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Adınız Soyadınız' /> : <></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='E-posta' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Şifre' />
        </div>
        <button onClick={() => state === "Üye Ol" ? signup() : login()}>İleri</button>
        {state === "Üye Ol"
          ? <p className='loginsignup-login'>Zaten Kayıtlı Hesabınız Mı Var? <span onClick={() => setState("Giriş Yap")}>Giriş Yap</span></p>
          : <p className='loginsignup-login'>Yeni hesap oluşturun <span onClick={() => setState("Üye Ol")}>Buraya Tıklayın</span></p>
        }
        <div className='loginsignup-agree'>
          <input type="checkbox" name='' id='' />
          <p>Üyelik sözleşmesini ve Aydınlatma metni ve gizlilik politikasını okudum ve onaylıyorum.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
