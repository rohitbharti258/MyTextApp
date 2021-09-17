import React from 'react'
import PropTypes from 'prop-types'
import './app.css';
import { useState } from 'react/cjs/react.development';
import { Link } from 'react-router-dom';


export default function Navbar(props) {
 
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>


              <li className="nav-item">
                <a className="nav-link" href="#">{props.aboutText}</a>
              </li>
            </ul>
            {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
            <div className="form-check form-switch ">
              <input className="form-check-input green"   onClick={props.showgreen} type="checkbox" id="myswitch" />
              {/* <label className="form-check-label"  style={props.style}  htmlFor="myswitch">Enable {props.text} mode</label> */}
            </div>
            <div className="form-check form-switch ">
              <input className="form-check-input primary"  onClick={props.togglemode} type="checkbox" id="myswitch"/>
            </div>
            <div className="form-check form-switch ">
              <input className="form-check-input darkblue"  onClick={props.showdarkblue} type="checkbox" id="myswitch" />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'about Text here'
};