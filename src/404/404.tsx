import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <Row className="not-found-area">
      <Col xs={6} md={6} className="d-none d-md-block">
        <div className="img-404"></div>
      </Col>
      <Col
        xs={12}
        md={6}
        className="d-flex align-items-center justify-content-center"
      >
        <div className="text-center">
          <h1>Oops...</h1>
          <h2>A página que você procura não existe!</h2>
          <Link to={'/'}>Voltar para a home</Link>
        </div>
      </Col>
    </Row>
  );
};

export default NotFound;
