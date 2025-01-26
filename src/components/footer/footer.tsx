import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col xs={12}>
          {new Date().getFullYear()} - Federação Paulista de Futebol &copy;
          Todos os direitos reservados.
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
