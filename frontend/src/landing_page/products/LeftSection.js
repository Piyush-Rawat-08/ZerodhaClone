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
                <div className="col-6 mt-5">
                    <img src={imageUrl}/>
                </div>
                <div className="col-5 mt-3 p-5">
                    <h1 className="fs-3 text-muted">{productName}</h1>
                    <p className="mt-4 fs-5 text-muted">{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo<i className="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} style={{ marginLeft: '50px', textDecoration:"none" }}>Learn More<i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className="mt-4">
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg"/>
                        </a>
                        <a href={appStore}>
                            <img 
                                src="media/images/appStoreBadge.svg"
                                style={{ marginLeft: '50px' }}
                            />
                        </a>
                    </div>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
     );
}

export default LeftSection;