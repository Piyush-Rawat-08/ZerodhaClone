import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <div className="container p-5 ">
            <div className="row text-center p-5">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-3" style={{width:"70%",margin:"0 auto"}}/>
                <h1 className="mt-3">Invest In Everything</h1>
                <p className="mt-3">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to="/Signupform" className="btn btn-primary p-2 fs-5 mt-3" style={{width:"20%",margin:"0 auto"}}> Sign up for free</Link>
            </div>
        </div>
     );
}

export default Hero;