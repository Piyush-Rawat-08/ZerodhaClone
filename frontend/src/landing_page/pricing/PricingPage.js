import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import '../OpenAccount';
import Brokerage from './Brokerage';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';


function PricingPage() {
    return ( 
        <div>
            <Navbar />
            <Hero />
            <div style={{position: 'relative', bottom: '100px'}}>
                <OpenAccount/>
            </div>
            <div style={{position: 'relative', bottom: '100px'}}>
                <Brokerage />
            </div>
            
            <Footer />
        </div>
    );
}

export default PricingPage;