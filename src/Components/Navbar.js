import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div className='container-fluid'>
            <nav className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} p-2`}>
                {/* <div className="container-fluid "> */}
                {/*------------------- Collaps Menu Button---------------------- */}

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/*-------------------Company Title---------------------- */}

                <Link className='navbar-brand' to='/'>TripExpress</Link>

                {/*------------------- Navbar menu list---------------------- */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={"nav navbar-nav ms-auto mb-lg-0 border rounded-5"}>
                        <li className="nav-item mx-3">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <div className='vr'></div>
                        <li className="nav-item mx-3">
                            <Link className="nav-link " to="/Tour">Tour</Link>
                        </li>
                        <div className='vr'></div>

                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <div className='vr'></div>

                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                        <div className='vr'></div>

                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/Signin">Sign In</Link>
                        </li>
                        <div className='vr'></div>

                        {/* -------------------Light or Dark mode Toggler------------------- */}

                        {/* <li className={`nav-item form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}> */}

                        <li className={`nav-item form-check form-switch pt-2`}>
                            {/* <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Light / Dark</label> */}

                            <input className="form-check-input checkbox" type="checkbox" id="checkbox" onClick={props.toggleMode} />

                            <label className="form-check-label checkbox-label" htmlFor="checkbox">
                                <i className="bi bi-moon-stars-fill"></i>
                                <i className="bi bi-sun-fill"></i>
                                <span className="ball"></span>
                            </label>
                            {/* const checkbox = document.getElementById("checkbox")
                            checkbox.addEventListener("change", () => {
                                document.body.classList.toggle("dark")
                            }) */}
                        </li>
                    </ul>
                </div>
                {/* </div> */}
            </nav>
        </div>
    )
}
