import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

const WithNavbarsLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <div className="sidebar menu">
          <div id="logo">
            <h1>LOGO</h1>
          </div>
        </div>
        <Col>
          <Navbar />
          <div className="content">{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default WithNavbarsLayout;
