import React from "react";
function Team() {
  return (
    <div className="container">
        <div className="row text-center">
        <h1 className="fs-3">People</h1>
      </div>
      <div className="row p-5">
        <div className="col p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="team"
            style={{ width: "55%", borderRadius: "100%"}}
          />
          <h1 className="mx-5 fs-5 mt-4">Nithin Kamath</h1>
          <p className="mx-5" >Founder,CEO</p>
        </div>
        <div className="col p-3 mt-3" style={{marginRight:"20px",fontSize:"1.1em"}}>
          <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.</p>

          <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC).</p>
            
          <p> Playing basketball is his zen.</p>

          <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a>  / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
        </div>
      </div>
    </div>
  );
}

export default Team;
