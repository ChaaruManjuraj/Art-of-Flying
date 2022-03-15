import React from 'react'
import '../Styles/Style.css'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <div className="container u-full-width u-max-full-width">
            <div className="row navbar-container">
                <div className="six columns logo">
                    ART OF FLYING!
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
    </div>
  )
}

export default Navbar