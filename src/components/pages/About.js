import React from "react";
import picture from "/Users/scottmanley/ReactPortfolio/src/components/pages/IMG_1410.jpg"

function About() {
  return (
    <div>
      <div className="container content mt-4 noscroll">
        <div className="row mt-2">
          <div className="col-md-12">
            <div id="header">
              <h1>About Me</h1>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 col-md-4">
            <img className="headshot img-fluid" src={picture} />
          </div>
          <div className="col-12 col-md-8 pt-2 pt-md-0">
            <p><b>SJM Design</b> is a professional design firm. Full-Stack developing with
            skills in HTML, CSS, JavaScript, Bootstrap, JQuery, Node, MySQL, Databases
            and MongoDB. Skills to individualize your fine art needs and enhance your
            personal life style. We work closely with our clients to ensure a total
            custom experience and create a final product that will enrich any project.
              <br></br>
              <br></br>
            I have a passion for code development as well as art and design with extensive
            experience in graphic design. I have gained strong analytical skills with the
            ability to develop graphics with multiple applications.
            <br></br>
              <br></br>
             Adept working within a team or individually, problem solving projects in a
             collaborative environment. I like the idea of taking an idea, whether it’s
             in a group or solo, from concept to finished product. Delivering it to the
             client exceeding their expectations. Art has always been very exciting to me.
             Creating on a canvas or on a computer. For print or for the internet.
             Being creative and executing a top quality product is my foremost goal.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;