import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

import 'react-toastify/dist/ReactToastify.css';
import OpenAccount from '../OpenAccount';

function SignUpPage() {
    return ( 
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <img src= "media/images/signup.png" alt="signup" style={{width:"50%", margin:"0 auto"}} className="mt-5"/>
                    <OpenAccount />
                </div>
            </div>
            <Footer />
        </div>
     );
}

export default SignUpPage;