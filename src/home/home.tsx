import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

const Home = () => {
  const url = window.location.pathname;

  useEffect(() => {
    if (url === '/') {
      window.location.href = '/home';
    }
  }, []);

  return (
    <Row className="home-area">
      <Col xs={6} md={6} className="d-none d-md-block">
        <div className="img-home"></div>
      </Col>
      <Col
        xs={12}
        md={6}
        className="d-flex align-items-center justify-content-center"
      >
        <h1 className="text-center">
          Bem vindo ao sistema de cadastro de pessoas da Federação Paulista de
          Futebol
        </h1>
      </Col>
    </Row>
  );
};

export default Home;
