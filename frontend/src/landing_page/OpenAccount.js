import React from 'react';
//import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function OpenAccount() {

    return ( 
        <div className="container p-5 ">
            <div className="row text-center p-5">
                <h1 className="mt-3 fs-3">Open a Zerodha account</h1>
                <p className="mt-3">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <Link to="/Signupform" className="btn btn-primary p-2 fs-5 mt-3 hero-button"> Sign up for free</Link>
            </div>
        </div>
     );
}

export default OpenAccount;