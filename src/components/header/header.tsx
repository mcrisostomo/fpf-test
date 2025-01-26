import React from 'react';
import { TextOutdent, TextIndent } from '@phosphor-icons/react';
import LogoFPF from './../../assets/img/logo-fpf-label-4-out-2024-FP.png';
import { Button, Col, Row } from 'react-bootstrap';
import UserBadge from './user-badge';

interface Props {
  menuOpened: boolean;
  setMenuOpened: any;
  mobileScreen: any;
}

const Header = (props: Props) => {
  function getElementByIdOrThrow<T extends HTMLElement>(id: string): T {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Elemento com ID "${id}" não encontrado no DOM.`);
    }
    return element as T;
  }

  const handleExpandMenu = () => {
    const btnExpandMenu = getElementByIdOrThrow<HTMLButtonElement>(
      props.mobileScreen ? 'btn-expand-mobile-menu' : 'btn-expand-menu'
    );

    btnExpandMenu.click();

    if (!props.mobileScreen) {
      props.setMenuOpened(!props.menuOpened);
    }
  };

  return (
    <header className="d-flex align-items-center justify-content-center ps-2">
      <Row className="w-100 header-content">
        <Col md={6} className="px-0">
          <Button
            className="p-0 me-3 btn-menu"
            variant="link"
            onClick={handleExpandMenu}
          >
            {props.menuOpened ? (
              <TextOutdent size={32} weight="light" />
            ) : (
              <TextIndent size={32} weight="light" />
            )}
          </Button>
          <img src={LogoFPF} alt="Logomarca da Federação Paulista de Futebol" />
          {props.mobileScreen && <UserBadge />}
        </Col>
        <Col
          md={6}
          className="d-none d-sm-flex align-items-center justify-content-end"
        >
          <UserBadge />
        </Col>
      </Row>
    </header>
  );
};

export default Header;
