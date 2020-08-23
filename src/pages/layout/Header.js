import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link className="navbar-brand" to="/">Make Web</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to="/">Features</Link>
                    <Link className="nav-link" to="/">Pricing</Link>
                </Nav>
                <Nav>
                    <Link className="nav-link" to="/signin">Signin</Link>
                    <Link className="nav-link" to="/profile">Profile</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header