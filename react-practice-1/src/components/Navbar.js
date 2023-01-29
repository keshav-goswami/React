import React from "react";
import Proptypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                aria-current="page"
                                to="/"
                            >
                              Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">
                                {props.about}
                            </Link>
                        </li>
                    </ul>
                    <button onClick={props.handleToggle} className={`btn btn-${props.mode==='light'?'dark':'light'}`}>{props.mode==="light"?"Dark Mode":"Light Mode"}</button>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: Proptypes.string,
    about: Proptypes.string,
};

Navbar.defaultProps = {
    title: "Set a Title",
    about: "About",
};
