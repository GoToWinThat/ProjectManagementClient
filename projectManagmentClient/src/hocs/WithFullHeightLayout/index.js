import React from "react";
import { Container } from "react-bootstrap";

function WithFullHeightLayout({ children }) {
  return (
    <Container fluid className="fullHeight">
      <div className="content">{children}</div>
    </Container>
  );
}

export default WithFullHeightLayout;
