import React from 'react';
function RightSection({
    productName,
    productDescription,
    learnMore,
    imageUrl
}) {
    return ( 
        <div className="container mt-5">
            <div className="row ">
                <div className="col-1"></div>
                <div className="col-5 mt-5 p-5 ">
                    <h1 className=" text-muted mt-5 fs-3 p-4">{productName}</h1>
                    <p className="text-muted mb-4 mx-4 fs-5">{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none", marginLeft: '25px'}}>Learn more<i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-6 mt-5">
                    <img src={imageUrl}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;