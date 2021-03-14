import React, { Fragment } from 'react';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Container, Row, Col } from "react-bootstrap";
import './style.scss';

const layout = (props) => {
    return (
        <Container fluid>
            <Row>
                <div className="sidebar menu">
                    <div id="logo">
                        <h1>
                            LOGO
                        </h1>
                    </div>
                </div>
                <Col>
                    <Navbar/>
                    <div className="content">
                        {props.children}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default layout;