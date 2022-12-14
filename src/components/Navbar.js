import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.aboutText}</Link>
              </li>
              
            </ul>

            <div className="d-flex">
              {/* NOTE: onClick takes a function, not a function call */}
              {/* <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:'20px',width:'20px',cursor: 'pointer'}}></div> */}
              <div className="bg-danger rounded mx-2" onClick={props.setColor.red} style={{height:'20px',width:'20px',cursor: 'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={props.setColor.green} style={{height:'20px',width:'20px',cursor: 'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={props.setColor.yellow} style={{height:'20px',width:'20px',cursor: 'pointer'}}></div>
            </div>
            {/* <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={()=>{props.toggleMode(null)}}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {`${props.mode==='light'?'dark':'light'}`} mode</label>
            </div>
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
}

// .isRequired for mandatory fields(if you don't pass a value and specify a default value then you get an error)

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About'

}