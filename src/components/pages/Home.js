import React from "react";
import picture from "/Users/scottmanley/ReactPortfolio/src/components/pages/IMG_1410 2.jpg"

function Home() {
  return (
    
    <div>
      <div style={{backgroundColor: "#e0dede"}}>portfolio</div>
      <div className="container content mt-4 noscroll">
        <div className="row mt-2">
          <div className="col-md-12">
            <div id="header">
              <h1>Home Page</h1>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 col-md-3">
            <img className="headshot img-fluid" src={picture} />
          </div>
          <div className="col-12 col-md-8 pt-2 pt-md-0">
            <p><b>Creative Designer · Web Developer · Frontend Developer · Freelance Graphic Designer</b>
              <br></br>
              <br></br>
              Experienced Creative Designer. Strong development skills in Web Development 
              (FrontEnd and BackEnd) Digital Graphics, Logo Design, Adobe Creative Suite, and a skilled Artisan. 
            <br></br>
              <br></br>
              <b>SJM Design</b> is a professional design studio creating anything from small to 
              large/long-term projects. With over 25 years of exposure to many different clients, 
              we can create a final product that will enrich corporate or private needs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
