import React from 'react';
function Hero() {
    return ( 
        <div className="container">
            <div className="row text-center mt-5 p-5">
                <h1 className="fs-3">Charges</h1>
                <p className="mt-2 fs-4 text-muted">List of all charges and taxes</p>
            </div>
            <div className="row p-3 p-md-5 text-center">
                <div className="col-12 col-md-4 mt-5 p-3 p-md-5">
                    <img src="media/images/pricing0.svg" style={{width:'85%'}}/>
                    <h1 className="fs-3">Free equity delivery</h1>
                    <p className="text-muted mt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-12 col-md-4 mt-5 p-3 p-md-5">
                    <img src="media/images/intradayTrades.svg" style={{width:'85%'}}/>
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <p className="text-muted mt-4">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-12 col-md-4 mt-5 p-3 p-md-5">
                    <img src="media/images/pricingMF.svg" style={{width:'85%'}}/>
                    <h1 className="fs-3">Free direct MF</h1>
                    <p className="text-muted mt-4">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    );
}

export default Hero;