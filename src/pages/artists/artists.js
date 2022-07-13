import React from 'react';
import {Button, Card} from "react-bootstrap";
import logo from "../../ressources/logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faPen, faTrash} from "@fortawesome/free-solid-svg-icons";

const Artist = () => {
    return (
        <div>
            <div>
                <h2>Artiste</h2>
                <div className="p-4 row">
                    <Card style={{width: '18rem'}} className="m-4">
                        <Card.Img variant="top" src={logo}/>
                        <Card.Body>
                            <Card.Title>Artiste</Card.Title>
                            <Card.Text>
                                Artiste
                            </Card.Text>
                            <Button variant="primary"><FontAwesomeIcon icon={faEye}/></Button>
                            <Button variant="warning"><FontAwesomeIcon icon={faPen}/></Button>
                            <Button variant="danger"><FontAwesomeIcon icon={faTrash}/></Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Artist;
