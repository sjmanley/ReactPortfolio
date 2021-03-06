import React from "react";

const Blog = () => (
    <div>
        <div style={{ backgroundColor: "#e0dede", textAlign: "-webkit-center" }}>online portfolio</div>
        <div className="container1 content mt-4 noscroll">
            <div className="row mt-2">
                <div className="col-md-12">
                    <div id="contentHeader">
                        <h3 style={{"text-align":"center"}}><b>SJM</b> - (BC) <i>Projects</i></h3>
                    </div>
                </div>
            </div>
            <ul>
                <li className="list-group-item contactlink">
                    <a href="https://harleyjenn44.github.io/Project-1/" target="_blank">
                        <i class="far fa-envelope"></i>
                        <button type="button" class="btn btn-dark">1</button>
                        <span>  • Project One   -   "Game Of Rings" Interactive Faux Gaming Platform</span>
                    </a>
                </li>
                <li className="list-group-item contactlink">
                    <a href="https://desolate-headland-72832.herokuapp.com/" target="_blank">
                        <i class="far fa-envelope"></i>
                        <button type="button" class="btn btn-dark">2</button>
                        <span>  • Project Two  -  NJS Roofing Inc. Professional Contractors</span>
                    </a>
                </li>
                <li className="list-group-item contactlink">
                    <a href="https://note-taker-sjm.herokuapp.com/" target="_blank">
                        <i class="far fa-file"></i>
                        <button type="button" class="btn btn-dark">3</button>
                        <span>  • Note Taker - Program To Take And Keep Notes For Organizing Daily Activities</span>
                    </a>
                </li>
                <li className="list-group-item contactlink">
                    <a href="https://sjmanley.github.io/WeatherDashboard/" target="_blank">
                        <i class="fab fa-github"></i>
                        <button type="button" class="btn btn-dark">4</button>
                        <span>  • Weather Dashboard - Website To Keep Track Of Weather In Key Areas Of Interest</span>
                    </a>
                </li>
                <li className="list-group-item contactlink">
                    <a href="https://burgerscott.herokuapp.com/" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                        <button type="button" class="btn btn-dark">5</button>
                        <span>  • Eat Da Burger - Fun Game To Create And To "EAT" Gourmet Burgers And Sandwiches</span>
                    </a>
                </li>
                <li className="list-group-item contactlink">
                    <a href="https://sjmanley.github.io/DailyPlanner/" target="_blank">
                        <i class="fab fa-linkedin-in"></i>
                        <button type="button" class="btn btn-dark">6</button>
                        <span>  • Daily Planner - Weekly And Daily Planner Scheduler To Keep Track Of Tasks</span>
                    </a>
                </li>
            </ul>
        </div>
        <div style={{ backgroundColor: "#e0dede", textAlign: "-webkit-center" }}>copyright 2020</div>
    </div>
);

export default Blog;
