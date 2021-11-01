import React from "react";

export default function navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white">
            <div className="container-fluid">
                <a
                    className="navbar-brand"
                    href="#"
                    style={{ paddingLeft: "55px" }}
                >
                    <img
                        src="assets/img/logo-ALTA.png"
                        alt=""
                        className="d-inline-block"
                        style={{ width: "100.75px", height: "50px" }}
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse1"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse1">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                                HOME
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                ABOUT
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                EXPERIENCE
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./contact.html">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
