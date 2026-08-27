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
                    <div className="col-12 col-md-8 mx-auto mt-5 text-center">
                        <img src="media/images/signup.png" alt="signup" className="img-fluid"/>
                    </div>
                    <OpenAccount />
                </div>
            </div>
            <Footer />
        </div>
     );
}

export default SignUpPage;