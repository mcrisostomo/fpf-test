import React, { useEffect, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router';

const MenuContent = () => {
  const location = useLocation();

  const [show, setShow] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isExpanded = (isOpen: boolean) => {
    setShow(isOpen);
  };

  useEffect(() => {
    if (
      location.pathname === '/list-people' ||
      location.pathname === '/add-people'
    ) {
      setShow(true);
    }
  }, [location.pathname]);

  return (
    <Nav>
      <Nav.Link
        as={NavLink}
        to="/home"
        active={isActive('/home') ? true : false}
      >
        Home
      </Nav.Link>
      <NavDropdown
        title="Cadastro de pessoas"
        id={`offcanvasNavbarDropdown-expand-xs`}
        show={show}
        onToggle={isExpanded}
      >
        <NavDropdown.Item
          as={NavLink}
          to="/list-people"
          active={isActive('/list-people') ? true : false}
        >
          Listar pessoas
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default MenuContent;
