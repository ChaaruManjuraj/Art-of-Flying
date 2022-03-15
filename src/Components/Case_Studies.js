import React from 'react'
import { Link } from 'react-router-dom'

export default function Case_Studies() {

    function handleClick(e) {
        e.preventDefault()
    }

  return (
    <div className="case_studies">
        <div className="container u-full-width u-max-full-width">
            <div className="row">
                  <Link to={`/case-studies/1`}>
                    <div className="three columns card" id="card-1">
                        <h3>Who's on Control?</h3>
                    </div>
                </Link>
                  <Link to={`/case-studies/2`}>
                    <div className="three columns card" id="card-2">
                        <h3>The Last Hour of Flight 11</h3>
                    </div>
                </Link>
                  <Link to={`/case-studies/3`}>
                    <div className="three columns card" id="card-3">
                        <h3>Flying on "Empty"</h3>
                    </div>
                </Link>
                  <Link to={`/case-studies/4`}>
                    <div className="three columns card" id="card-4">
                        <h3>What happend to MH370?</h3>
                    </div>
                </Link>
                  <Link to={`/case-studies/5`}>
                    <div className="three columns card" id="card-5">
                        <h3>The Crash of Air Asia</h3>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
