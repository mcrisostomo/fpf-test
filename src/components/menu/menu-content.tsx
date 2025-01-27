import React, { useEffect, useState } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router';

interface Props {
  mobileScreen: any;
}

const MenuContent = (props: Props) => {
  const location = useLocation();

  const [show, setShow] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isExpanded = (isOpen: boolean) => {
    setShow(isOpen);
  };

  function getElementByIdOrThrow<T extends HTMLElement>(id: string): T {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Elemento com ID "${id}" não encontrado no DOM.`);
    }
    return element as T;
  }

  const handleCloseMobileMenu = () => {
    if (props.mobileScreen) {
      const btnCloseMobileMenu = getElementByIdOrThrow<HTMLButtonElement>(
        'btn-expand-mobile-menu'
      );

      btnCloseMobileMenu.click();
    }
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
        onClick={() => handleCloseMobileMenu()}
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
          onClick={() => handleCloseMobileMenu()}
        >
          Listar pessoas
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
};

export default MenuContent;
