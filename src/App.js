import React from 'react';
import './App.css';
import './component/sidebar/sidebar.css'
import Home from './pages/home/home';
import Artist from './pages/artists/artists';
import Event from './pages/events/events';
import {Button, Card, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import {Route, Router, Routes} from "react-router";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' exact element={<Home />} />
                <Route path='/event' element={<Event />} />
                <Route path='/artist' element={<Artist />} />
            </Routes>
        </Router>
    );
}

export default App;
