import React from 'react';
import logo from './ressources/logo.svg';
import bat from './ressources/bat.png';
import './App.css';
import './component/sidebar/sidebar.css'
import {Button, Card, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import Sidebar from "./component/sidebar/sidebar.js";

function App() {
    return (
        <div>

            {/*<div>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">FestivApp</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Festivals</Nav.Link>
                                <Nav.Link href="#link">Artistes</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>*/}

            <div className="p-4 row">
                <p>test push erreur 403</p>
                <h2>Événement à venir : </h2>
                <Card style={{width: '18rem'}} className="m-4">
                    <Card.Img variant="top" src={bat}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{width: '18rem'}} className="m-4">
                    <Card.Img variant="top" src={logo}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{width: '18rem'}} className="m-4">
                    <Card.Img variant="top" src={logo}/>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
}

export default App;
