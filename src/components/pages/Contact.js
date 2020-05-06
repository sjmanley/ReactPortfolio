import React from "react";

const Contact = () => (
  <div>
  <div className="container1 content mt-4 noscroll">
      <div className="row mt-2">
          <div className="col-md-12">
              <div id="contentHeader">
                  <h2>Contact</h2>
              </div>
          </div>
      </div>
      <ul className="list-group list-group-flush">
          <li className="list-group-item contactlink">
              <i class="fas fa-phone-alt"></i>
              <span><a href="tel:913-749-9115">(913)749-9115</a></span>
          </li>
          <li className="list-group-item contactlink">
              <a href="mailto:scottmanleydesigns@gmail.com">
                  <i class="far fa-envelope"></i>
                  <span>scottmanleydesigns@gmail.com</span>
              </a>
          </li>
          <li className="list-group-item contactlink">
              <a href="https://drive.google.com/file/d/1UCpJT5S7zyzETA87GWXUWNpKnowucwiF/view" target="_blank">
                  <i class="far fa-file"></i>
                  <span>Resume</span>
              </a>
          </li>
          <li className="list-group-item contactlink">
              <a href="https://github.com/sjmanley" target="_blank">
                  <i class="fab fa-github"></i>
                  <span>GitHub</span>
              </a>
          </li>
          <li className="list-group-item contactlink">
              <a href="https://www.linkedin.com/in/scott-manley-0a8325bb/?midToken=AQGhx3b10cwMTA&trk=eml-jobs_jymbii_digest-header-41-profile&trkEmail=eml-jobs_jymbii_digest-header-41-profile-null-72p2rk%7Ek1uxq3el%7E1x-null-neptune%2Fprofile%7Evanity%2Eview" target="_blank">
                  <i class="fab fa-linkedin-in"></i>
                  <span>Linkedin</span>
              </a>
          </li>
      </ul>
  </div>
</div>
);


export default Contact;
