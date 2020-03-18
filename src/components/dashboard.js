import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './header'
class test extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="12"><Header /></Col>
                </Row>
            </Container>
        );
    }
}

export default test;