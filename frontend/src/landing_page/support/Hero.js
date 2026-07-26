import React from "react";
function Hero() {
  return (
    <div
      className="container-fluid hero-section "
      style={{ backgroundColor: "lightgrey" }}
    >
      <div className="container">
        <div className="row p-4">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1 className="mt-2 fs-1">Support Portal</h1>
            <button className="btn btn-primary mt-3 px-4 py-0" >My Tickets</button>
          </div>
          <input
            type="text"
            className="form-control mt-4 mb-4 p-3 " style={{ fontSize: "18px",marginLeft:'10px', marginRight:'10px'     }}
            placeholder="Eg: Search for help articles, FAQs, and more..."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
