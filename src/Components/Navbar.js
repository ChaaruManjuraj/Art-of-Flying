import React from 'react'
import '../Styles/Style.css'

import { Link } from 'react-router-dom'
import { useEffect } from 'react'

function Navbar() {

    useEffect(() => {
        let nav = document.getElementById("nav-links-mobile");
        nav.style = "display: none !important"
    }, [])

    function showNav() {
        let nav = document.getElementById("nav-links-mobile");
        if (nav.style.display === "none") {
            nav.style = "block !important";
        }
        else
            nav.style = "display: none !important"
    }

  return (
    <div className="navbar">
        <div className="container u-full-width u-max-full-width desktop-navbar">
            <div className="row navbar-container">
                <div className="six columns logo">
                      <a style={{textDecoration: "none"}} href="/">ART OF FLYING!</a>
                </div>
                <div className="four columns nav-links">
                    <Link to="/">
                        <a>Home</a>
                    </Link>
                    <Link to="/about">
                        <a>About</a>
                    </Link>
                    <Link to="/contact">
                        <a>Contact Me</a>
                    </Link>
                </div>
            </div>
        </div>

          <div className="container u-full-width u-max-full-width mobile-navbar">
            <div className="row navbar-container">
                <div className="six columns logo">
                      <a style={{ textDecoration: "none" }} href="/">ART OF FLYING!</a>
                    <span id="hamburger">
                        <a onClick={showNav}>
                            <i class="fa fa-solid fa-bars"></i>
                        </a>
                    </span>
                </div>
            </div>
            <div className="row">
                  <div className="four columns nav-links-mobile" id="nav-links-mobile">
                      <Link to="/">
                          <a>Home</a>
                      </Link>
                      <Link to="/about">
                          <a>About</a>
                      </Link>
                      <Link to="/contact">
                          <a>Contact Me</a>
                      </Link>
                </div>
            </div>
        </div>
            
    </div>
  )
}

export default Navbar