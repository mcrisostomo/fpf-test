import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import MenuContent from './menu-content';
import LogoFanaticos from './../../assets/img/Logo_Fanaticos.png';

interface Props {
  menuOpened: boolean;
  mobileScreen: any;
}

const MenuDesktop = (props: Props) => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        key={'xs'}
        expand={'xs'}
        expanded={props.menuOpened}
        className="bg-body-tertiary w-100"
      >
        <Container fluid>
          <Navbar.Toggle
            id="btn-expand-menu"
            aria-controls={`offcanvasNavbar-expand-xs`}
            className="d-none"
          />
          <Navbar.Collapse
            id={`offcanvasNavbar-expand-xs`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xs`}
          >
            <MenuContent mobileScreen={props.mobileScreen} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <img src={LogoFanaticos} alt="Logo Fanáticos por Futebol" />
    </div>
  );
};

export default MenuDesktop;
