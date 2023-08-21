import React from 'react';
import logo from './logo.png';
import { NavLink } from 'react-router-dom';
// import '../index.css';

export default function Navbar(props) {

    let { mode, toggleMode, btnText } = props


    let whiteLogo = document.querySelector('img');
    if (mode === 'dark') {
        whiteLogo.style.filter = 'invert(100%)';
    }
    else {
        // whiteLogo.style.filter = 'invert(0)';
    }


    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} fixed-top py-3`}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src={logo} id='logo' alt="logo" />&nbsp;<span>World's News</span>
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item"><NavLink className="ps-4 nav-link" aria-current="page" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="ps-4 nav-link" aria-current="page" to="/business">Business</NavLink></li>
                            <li className="nav-item"><NavLink className="ps-4 nav-link" aria-current="page" to="/entertainment">Entertainment</NavLink></li>
                            <li className="nav-item"><NavLink className="ps-4 nav-link" aria-current="page" to="/general">General</NavLink></li>
                            <li className="nav-item"><NavLink className="ps-4 nav-link" aria-current="page" to="/health">Health</NavLink></li>
                            <li className="nav-item"><NavLink className="ps-4 nav-link" aria-current="page" to="/science">Science</NavLink></li>
                            <li className="nav-item"><NavLink className="ps-4 nav-link" aria-current="page" to="/sports">Sports</NavLink></li>
                            <li className="nav-item"><NavLink className="ps-4 nav-link" aria-current="page" to="/technology">Technology</NavLink></li>

                        </ul>
                    </div>

                    <div class="form-check form-switch" style={{ cursor: 'pointer' }}>
                        <input onClick={toggleMode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ cursor: 'pointer' }} />
                        <label class="form-check-label" htmlFor="flexSwitchCheckDefault">{btnText}</label>
                    </div>

                </div>
            </nav>
        </>
    )
}
