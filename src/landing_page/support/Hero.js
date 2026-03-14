import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{textDecoration:"none" ,color:"white"}}>Track Tickets</a>
      </div>

      <div className="row p-3 mx-5">
        <div className="col-6 p-5">
            <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1><br/>
            <input placeholder="Eg: how do I activate F&O, why is my order getting rejected."/><br/><br/>
            <a href=""style={{textDecoration:"none",color:"white"}}>Track account opening</a>&nbsp;&nbsp;&nbsp;
            <a href=""style={{textDecoration:"none",color:"white"}}>Track segment activation</a>&nbsp;&nbsp;&nbsp;
            <a href=""style={{textDecoration:"none",color:"white"}}>Intraday margins</a>&nbsp;&nbsp;&nbsp;
            <a href=""style={{textDecoration:"none",color:"white"}}>Kite user manual</a>&nbsp;&nbsp;&nbsp;
        </div>
        <div className="col-6 p-5 mt-2 ">
            <h1 className="fs-3">Featured</h1>
            <ol style={{lineHeight :"2.5"}}>
                <li><a href=""style={{textDecoration:"none",color:"white"}}>Current Takeovers and Delisting - January 2026</a></li>
                <li><a href=""style={{textDecoration:"none",color:"white"}}>Latest Intraday leverages - MIS & CO</a></li>
            </ol>
            
            
        </div>
       
      </div>
    </section>
  );
}

export default Hero;
