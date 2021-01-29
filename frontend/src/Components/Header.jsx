import React from 'react'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="home">Fake API</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="api">API</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}

export default Header
