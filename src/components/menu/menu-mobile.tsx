import React from 'react';
import { Container, Navbar, Offcanvas } from 'react-bootstrap';
import MenuContent from './menu-content';
import LogoFanaticos from './../../assets/img/Logo_Fanaticos.png';

interface Props {
  mobileScreen: any;
}

const MenuMobile = (props: Props) => {
  return (
    <Navbar
      collapseOnSelect
      key={'xs'}
      expand={'xs'}
      className="bg-body-tertiary mb-3"
    >
      <Container fluid>
        <Navbar.Toggle
          id="btn-expand-mobile-menu"
          aria-controls={`offcanvasNavbar-expand-xs`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xs`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xs`}
          placement="start"
          className="offcanvas-menu"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xs`}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="offcanvas-menu-area">
            <MenuContent mobileScreen={props.mobileScreen} />
            <img src={LogoFanaticos} alt="Logo Fanáticos por Futebol" />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MenuMobile;
