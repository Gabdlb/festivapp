import React from 'react';
//import logo from 'src/ressources/logo.svg';
//import bat from 'src/ressources/bat.png';
import './home.css';
//import './component/sidebar/sidebar.css'
import {Button, Card, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";

function Home() {
    return (
        <div>
            <div className="p-4 row">
                <h2>Événement à venir : </h2>
                <Card style={{width: '18rem'}} className="m-4">
                    {/*<Card.Img variant="top" src={}/>*/}
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
                    {/*<Card.Img variant="top" src={}/>*/}
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
                    {/*<Card.Img variant="top" src={logo}/>*/}
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

export default Home;
