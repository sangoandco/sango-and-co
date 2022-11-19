import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Values() {
    return (
        <Container>
            <Row>
                <Col>
                    <h5>Our Values</h5>
                </Col>
                <Col>
                    <p>These are our values...</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Values