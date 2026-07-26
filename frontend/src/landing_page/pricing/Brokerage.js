import React from 'react';
function Brokerage() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-3 text-center border-top">
                <div className="col-8 p-3">
                    <a href="" style={{ textDecoration:'none'}}>
                        <h3 className="fs-5 ">Brokerage calculator</h3>
                    </a>
                    <ul style={{textAlign:'left', lineHeight: '2.5', fontSize:'14px'}} className="text-muted mt-3">
                        <li>Call & Trade and RMS auto-squareoff:Additional Charges of ₹50 + GST per order.</li>
                        <li>Digital contract notes will be sent via e-mail.</li>
                        <li>Physical contract notes will be sent via post.</li>
                        <li>DP charges: ₹ 0.50 per scrip (₹ 0.01 per share) for delivery trades and ₹ 0.50 per scrip (₹ 0.01 per share) for trades.</li>
                        <li>GST: 18% on brokerage and transaction charges.</li>
                        <li>SEBI turnover charges: ₹ 10 per crore.</li>
                    </ul>
                </div>
                <div className="col-4 p-3">
                    <a href="" style={{ textDecoration:'none'}}>
                        <h3 className="fs-5">List of Charges</h3>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Brokerage;