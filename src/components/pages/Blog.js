import React from "react";

const Blog = () => (
    <div>
    <div className="container1 content mt-4 noscroll">
        <div className="row mt-2">
            <div className="col-md-12">
                <div id="contentHeader">
                    <h2>SJM - Projects</h2>
                </div>
            </div>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item contactlink">
                <i class="fas fa-phone-alt"></i>
                <button type="button" class="btn btn-primary">1</button>
                <span><a href="https://harleyjenn44.github.io/Project-1/" target="_blank">  Project One</a></span>
            </li>
            <li className="list-group-item contactlink">
                <a href="https://desolate-headland-72832.herokuapp.com/" target="_blank">
                    <i class="far fa-envelope"></i>
                    <button type="button" class="btn btn-primary">2</button>
                    <span>  Project Two</span>
                </a>
            </li>
            <li className="list-group-item contactlink">
                <a href="https://note-taker-sjm.herokuapp.com/" target="_blank">
                    <i class="far fa-file"></i>
                    <button type="button" class="btn btn-primary">3</button>
                    <span>  Note Taker</span>
                </a>
            </li>
            <li className="list-group-item contactlink">
                <a href="https://sjmanley.github.io/WeatherDashboard/" target="_blank">
                    <i class="fab fa-github"></i>
                    <button type="button" class="btn btn-primary">4</button>
                    <span>  Weather Dashboard</span>
                </a>
            </li>
            <li className="list-group-item contactlink">
                <a href="https://burgerscott.herokuapp.com/" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                    <button type="button" class="btn btn-primary">5</button>
                    <span>  Eat Da Burger</span>
                </a>
            </li>
            <li className="list-group-item contactlink">
                <a href="https://sjmanley.github.io/DailyPlanner/" target="_blank">
                    <i class="fab fa-linkedin-in"></i>
                    <button type="button" class="btn btn-primary">6</button>
                    <span>  Daily Planner</span>
                </a>
            </li>
        </ul>
    </div>
  </div>
  );

export default Blog;
