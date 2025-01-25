import React, { useState } from 'react';
import './assets/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import Header from './components/header/header';
import MenuMobile from './components/menu/menu-mobile';
import MenuDesktop from './components/menu/menu-desktop';
import Footer from './components/footer/footer';

const App = () => {
  const [menuOpened, setMenuOpened] = useState(true);

  const mobileScreen = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Container fluid className="ps-0">
      <Row>
        <Col xs={12} className="pe-0">
          <Header
            menuOpened={menuOpened}
            setMenuOpened={setMenuOpened}
            mobileScreen={mobileScreen}
          />
        </Col>
        <Col
          xs={'auto'}
          className={`d-none d-md-flex pe-0 area-menu ${
            !menuOpened ? 'collapse-area-menu' : ''
          } align-items-start`}
        >
          {mobileScreen ? (
            <MenuMobile />
          ) : (
            <MenuDesktop menuOpened={menuOpened} />
          )}
        </Col>
        <Col
          className={`area-site ${!menuOpened ? 'expand-area-site' : ''} p-0`}
        >
          <Row className="mx-0">
            <Col xs={12} className="p-3 site-content">
              Área do site
            </Col>
            <Col xs={12} className="p-3">
              <Footer />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
