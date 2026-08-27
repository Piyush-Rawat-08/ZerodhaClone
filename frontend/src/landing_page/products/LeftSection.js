import React from 'react';
function LeftSection({
    imageUrl,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className="container ">
            <div className="row ">
                <div className="col-12 col-md-6 mt-5 p-3 text-center">
                    <img src={imageUrl} className="img-fluid"/>
                </div>
                <div className="col-12 col-md-5 mt-3 p-3 p-md-5">
                    <h1 className="fs-3 text-muted">{productName}</h1>
                    <p className="mt-4 fs-5 text-muted">{productDescription}</p>
                    <div className="d-flex flex-wrap gap-3 gap-md-4">
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo<i className="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{ textDecoration:"none" }}>Learn More<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-4 d-flex flex-wrap gap-3 gap-md-4 align-items-center">
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg"/>
                        </a>
                        <a href={appStore}>
                            <img 
                                src="media/images/appStoreBadge.svg"
                            />
                        </a>
                    </div>
                </div>
                <div className="d-none d-md-block col-md-1"></div>
            </div>
        </div>
     );
}

export default LeftSection;