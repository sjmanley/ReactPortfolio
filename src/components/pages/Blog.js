import React from "react";

const Blog = () => (
    <div>
    <div className="container1 content mt-4 noscroll">
        <div className="row mt-2">
            <div className="col-md-12">
                <div id="contentHeader">
                    <h2>Projects</h2>
                </div>
            </div>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item contactlink">
                <i class="fas fa-phone-alt"></i>
                <span><a href="https://harleyjenn44.github.io/Project-1/">Project One</a></span>
            </li>
            <li className="list-group-item contactlink">
                <a href="https://desolate-headland-72832.herokuapp.com/2">
                    <i class="far fa-envelope"></i>
                    <span>Project Two</span>
                </a>
            </li>
            <li className="list-group-item contactlink">
                <a href="https://note-taker-sjm.herokuapp.com/">
                    <i class="far fa-file"></i>
                    <span>Note Taker</span>
                </a>
            </li>
            <li className="list-group-item contactlink">
                <a href="https://sjmanley.github.io/WeatherDashboard/">
                    <i class="fab fa-github"></i>
                    <span>Weather Dashboard</span>
                </a>
            </li>
            <li className="list-group-item contactlink">
                <a href="https://burgerscott.herokuapp.com/">
                    <i class="fab fa-linkedin-in"></i>
                    <span>Eat Da Burger</span>
                </a>
            </li>
            <li className="list-group-item contactlink">
                <a href="https://sjmanley.github.io/DailyPlanner/">
                    <i class="fab fa-linkedin-in"></i>
                    <span>Daily Planner</span>
                </a>
            </li>
        </ul>
    </div>
  </div>
  );

export default Blog;
