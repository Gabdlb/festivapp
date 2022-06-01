import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './sidebar.css'

const Side = props => {


    return (
        <>

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">FestivApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/events">Festivals</Nav.Link>
                            <Nav.Link href="/artists">Artistes</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Side
