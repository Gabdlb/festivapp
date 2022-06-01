import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './sidebar.css'
import {LinkContainer} from 'react-router-bootstrap'

const Side = props => {


    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">FestivApp</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/event">
                                <Nav.Link>Festivals</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/artist">
                                <Nav.Link>Artistes</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Side
