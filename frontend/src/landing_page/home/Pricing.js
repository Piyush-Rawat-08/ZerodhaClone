import React from "react";

function Pricing() {
  return (
    <div className="container p-3 ">
      <div className="row p-3 mx-0">
        <div className="col-12 col-md-4">
          <h1 className="mb-4 fs-3">Unbeatable Pricing</h1>
          <p className="text-muted mt-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="d-none d-md-block col-md-2"></div>
        <div className="col-12 col-md-6 mt-4 mt-md-0">
            <div className="row text-center">
                <div className="col-12 col-sm-6 p-3 border">
                    <h1 className="mb-3">₹0</h1>
                    <p>Free equity delivery and <br/>direct mutual funds</p>
                </div>
                <div className="col-12 col-sm-6 p-2 border">
                    <h1 className="mb-3">₹20</h1>
                    <p>Intraday F&O</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
