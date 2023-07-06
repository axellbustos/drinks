import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

export const NotFound = () => {
  return (
    <Container style={{ backgroundColor: "red" }}>
      <Row>
        <Col md={6}>
          <h1 className="text-center">404</h1>
          <p className="text-center">Page not found</p>
        </Col>
      </Row>
    </Container>
  )
}
