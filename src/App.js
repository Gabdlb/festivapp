import React from 'react';
import './App.css';
import './component/sidebar/sidebar.css'
import Home from './pages/home/home';
import Artist from './pages/artists/artists';
import Event from './pages/events/events';
import Login from './pages/login/login'
import {Button, Card, Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
//import {Route, Router, Routes} from "react-router";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Sidebar from "./component/sidebar/sidebar";
import {Routes} from "react-router";

function App() {
    return (
        <Router>
            <Sidebar/>

            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route path='/event' element={<Event />}/>
                <Route path='/artist' element={<Artist />}/>
                <Route path="/login" element={<Login />} />
            </Routes>

        </Router>
    );
}

export default App;
