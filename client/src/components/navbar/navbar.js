import React from 'react';
//import './App.css';
import { Link } from 'react-router-dom';


function Navbar() {
    const navStyle1 = {
        color: '#ffffff',
        display: 'flex',
        marginTop: '15px'
    };

    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        <Link style={navStyle1} to="/home">Conteo Ciudadano App</Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navb" className="navbar-collapse collapse hide">
            <ul className="nav-links">
                <Link style={navStyle1} to="/provincia">
                    <li className="nav-item">Provincia</li>
                </Link>
                <Link style={navStyle1} to="/persona">
                    <li className="nav-item">Persona</li>
                </Link>
                <Link style={navStyle1} to="/municipio">
                    <li className="nav-item">Municipio</li>
                </Link>
                <Link style={navStyle1} to="/distrito">
                    <li className="nav-item">Distrito</li>
                </Link>
                <Link style={navStyle1} to="/censo_derecho">
                    <li className="nav-item">CensoDerecho</li>
                </Link>
                <Link style={navStyle1} to="/censo_hecho">
                    <li className="nav-item">Censo Hecho</li>
                </Link>
                <Link style={navStyle1} to="/censo_distrital_derecho">
                    <li className="nav-item">Censo Dist Der</li>
                </Link>
                <Link style={navStyle1} to="/censo_distrital_hecho">
                    <li className="nav-item">Censo Dist Hec</li>
                </Link>
            </ul>

            <ul className="nav navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#"><span className="fas fa-user"></span> Sign Up</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#"><span className="fas fa-sign-in-alt"></span> Login</a>
                </li>
            </ul>
        </div>
        </nav>
    );
}

export default Navbar;