import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active" className="nav-link">About Me</NavLink>
            <NavLink to="/portfolio" activeClassName="active" className="nav-link">Portfolio</NavLink>
            <NavLink to="/contact" activeClassName="active" className="nav-link">Contact</NavLink>
            <NavLink to="/resume" activeClassName="active" className="nav-link">Resume</NavLink>
        </nav>
    );
}

export default Navigation;