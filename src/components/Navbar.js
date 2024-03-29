import React ,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';



export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
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
        {/*<li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li>*/}

      </ul>
     {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
  </form>*/}
<button type="button" onClick={props.handleGreenClick} className="btn btn-success mx-2">Green</button> 

<button type="button" onClick={props.handleRedClick} className="btn btn-danger mx-2">Red</button>

<button type="button" onClick={props.handleBlackClick} style={{border:'1px solid white'}} className="btn btn-dark mx-2">Black</button>

      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Enable dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}
Navbar.prototype={title:PropTypes.string.isRequired,
                aboutText:PropTypes.string.isRequired
                };
Navbar.defaultProps={
    title:'Set title here',
    aboutText:'About'
};

