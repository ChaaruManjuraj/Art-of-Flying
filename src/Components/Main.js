import React from 'react'
import '../Styles/Style.css'

import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function Main() {

  const history = useNavigate();
  const [introDownload, setIntroDownload] = useState(false)

  function handleClick(e) {
    switch(e.target.getElementsByTagName('h4')[0].innerHTML) {
      case 'Introduction':
        setIntroDownload(true)
        history('/introduction')
        break
      case 'Case Studies':
        history('/case-studies')
        break
      case 'Records':
        history('/records')
        break
      case 'Summary':
        history('/summary')
        break
      default:
        break
    }
  }

  return (
      <div className="main">
        <h1 className="title">
          Human Interaction with the On-Board <br />
          Sensors of the Next-Gen Aircrafts
        </h1>
        <h4>A research project by <Link to='/about' style={{ textDecoration: 'none' }}><span>Chaaru Manjuraj</span></Link> </h4>

        { introDownload ? <Link to='/introduction'></Link>: null }

        <div className="container go-to u-full-width u-max-full-width">
          <div className="row">
            <div className="three columns">
              <button onClick={handleClick}><h4>Introduction</h4></button>
            </div>
            <div className="three columns">
              <button onClick={handleClick}><h4>Case Studies</h4></button>
            </div>
            <div className="three columns">
              <button onClick={handleClick}><h4>Records</h4></button>
            </div>
            <div className="three columns">
              <button onClick={handleClick}><h4>Summary</h4></button>
            </div>
          </div>
        </div>
    </div>
  )
}
