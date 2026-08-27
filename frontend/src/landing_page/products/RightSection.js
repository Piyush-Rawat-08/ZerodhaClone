import React from 'react';
function RightSection({
    productName,
    productDescription,
    learnMore,
    imageUrl
}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="d-none d-md-block col-md-1"></div>
                <div className="col-12 col-md-5 mt-3 p-3 p-md-5 order-2 order-md-1">
                    <h1 className="text-muted mt-5 fs-3">{productName}</h1>
                    <p className="text-muted mb-4 fs-5">{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn more<i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-12 col-md-6 mt-5 p-3 text-center order-1 order-md-2">
                    <img src={imageUrl} className="img-fluid"/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;