import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Portfolio from '../Portfolio';
import About from '../About';
import './style.css';
import { Breakpoint } from 'react-socks';

export default class Profile extends Component {
    render() {
        return (
            <Container fluid className='profile-container'>
                <Row>
                    <Col lg={8} className='first-half'>
                        <Breakpoint customQuery="(min-width: 992px)">
                            <Portfolio />
                        </Breakpoint>
                    </Col>
                    <Col >
                        <About />
                    </Col>
                </Row>
            </Container>
        )
    }
}