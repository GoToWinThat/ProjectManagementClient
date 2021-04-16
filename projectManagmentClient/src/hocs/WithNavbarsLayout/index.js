import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

const WithNavbarLayout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col>
          <Navbar />
          <div className="mainContent">{children}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default WithNavbarLayout;
