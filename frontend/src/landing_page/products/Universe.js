import React from 'react';
import { Link } from 'react-router-dom';
function Universe() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-3 p-2 fs-3">The Zerodha Universe</h1>
                <p className="mt-3">Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 mt-5 p-3">
                    <img src="media/images/zerodhaFundhouse.png" style={{width:"50%"}}/>
                    <p></p>
                </div>
                <div className="col-4 mt-5 p-3">
                    <img src="media/images/sensibullLogo.svg" style={{width:"50%"}}/>
                    <p></p>
                </div>
                <div className="col-4 mt-5 p-3">
                    <img src="media/images/goldenpiLogo.png" style={{width:"50%"}}/>
                    <p></p>
                </div>
                <div className="col-4 mt-5 p-3">
                    <img src="media/images/streakLogo.png" style={{width:"50%"}}/>
                    <p></p>
                </div>
                 <div className="col-4 mt-5 p-3">
                    <img src="media/images/smallcaseLogo.png" style={{width:"50%"}}/>
                    <p></p>
                </div>
                <div className="col-4 mt-5 p-3">
                    <img src="media/images/dittoLogo.png" style={{width:"35%"}}/>
                    <p></p>
                </div>
                <Link to="/Signupform" className="btn btn-primary  mt-3 mb-4 px-2" style={{width:"15%", marginLeft:'45%', fontSize:"20px"}}>Sign up for free</Link>
            </div>
        </div>
     );
}

export default Universe;