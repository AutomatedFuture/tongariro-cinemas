/*
Author: AutomatedFuture@github
*/

// Code for the header

import { useLocation, useNavigate } from "react-router-dom"; // Used for identifying the current page and assigning a red-border under the present page's link


function Header() {
    const location = useLocation();
    const navigate = useNavigate();

    const { pathname } = location;
    const splitLocation = pathname.split("/");
    
    return (
      <div id="header-container">
        <header id="top-bar">
        <h1 id="logo"><a href="/">Tongariro Cinemas</a></h1>
          <div id="search">
            <input type="text" placeholder="Search movies, actors, events and more..." />  
            <button onClick={()=> {navigate("/404")}}>Search</button>        
              
          </div>
        
        
        </header>
        <header id="navigation">
            <nav>
                <ul>
                    <li><a href="/" className={(splitLocation[1] === "" ? "active" : "") + " link-light"}>Recommended</a></li>
                    <li><a href="/movies" className={(splitLocation[1] === "movies" ? "active" : "") + " link-light"}>Movies</a></li>
                    <li><a href="/cinemas" className={(splitLocation[1] === "cinemas" ? "active" : "") + " link-light"}>Cinemas</a></li>
                    <li><a href="/rewards" className={(splitLocation[1] === "rewards" ? "active" : "") + " link-light"}>Rewards</a></li>
                </ul>
            </nav>
        </header>
      </div>
    )
}

export default Header;