import React from 'react';

function Awards() {
    return(
        <div className="container ">
            <div className="row">
                <div className="col-12 col-md-6 mt-5 p-3 p-md-5 order-1">
                    <img src="media/images/largestBroker.svg" alt="Largest Broker" className="home-section-image"/>
                </div>
                <div className="col-12 col-md-6 mt-5 p-3 p-md-5 order-2 home-section-text">
                    <h1>Largest stock broker in India</h1>
                    <p className="mt-3">2+ million zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                    <div className="row mt-5 mb-3">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>futures and options</p>
                                </li>
                                <li>
                                    <p>commodity derivatives</p>
                                </li>
                                <li>
                                    <p>currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>stocks & ipos</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds & Govt.securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="media/images/pressLogos.png" alt="Press Logo" className="img-fluid w-100"/>
                </div>
            </div>
        </div>
    )
}

export default Awards ;