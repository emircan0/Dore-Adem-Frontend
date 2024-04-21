import React from "react";
import './NewsLetter.css'

const NewsLetter = () => {
    return(
        <div className="newsletter">
            <h1>Tekliflerden Haberdar Olun</h1>
            <p>Abone Olun</p>
            <div>
                <input type="email" placeholder="Email id"/>
                <button>Abone Ol</button>
            </div>
        </div>
    )
}

export default NewsLetter