import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from '../Portfolio';
import About from '../About';
import { ReactComponent as ReactLogo } from './coding.svg';
import './style.css'

export default class Profile extends Component {
    render() {
        return (
            <Router>
                <Container fluid className='profile-container'>
                    <Row>
                        <Col lg xl={6} className='first-half'>
                            <div className='svg-div'>
                                <ReactLogo />
                            </div>
                        </Col>
                        <Col xs>
                            <Switch>
                                <Route path={'/about'}><About /></Route>
                                <Route path={'/portfolio'}><Portfolio /></Route>
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </Router>

        )
    }
}