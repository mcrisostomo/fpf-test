import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

const MenuContent = () => {
  return (
    <Nav>
      <Nav.Link href="#action1">Home</Nav.Link>
      <Nav.Link href="#action2">Link</Nav.Link>
      <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-xs`}>
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#action3">Link Novo</Nav.Link>
    </Nav>
  );
};

export default MenuContent;
