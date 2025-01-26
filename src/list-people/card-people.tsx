import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Pen, Trash } from '@phosphor-icons/react';

interface Props {
  people: any;
  setPeople: any;
  handleShowEditModal: any;
  handleShowDeleteModal: any;
}

const CardPeople = (props: Props) => {
  const statusPeople = (status: string): string => {
    let statusPeople;

    switch (status) {
      case '1':
        statusPeople = 'Ativo';
        break;
      case '2':
        statusPeople = 'Inativo';
        break;
      default:
        statusPeople = 'Desconhecido';
        break;
    }

    return statusPeople;
  };

  return (
    <Row xs={1} md={2} className="g-4">
      {props.people.map((e: any, i: any) => (
        <Col key={i}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={12} md={3}>
                  {e.profileImg === '' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="195"
                      height="195"
                      fill="#000000"
                      viewBox="0 0 256 256"
                    >
                      <path d="M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"></path>
                    </svg>
                  ) : (
                    <Card.Img variant="top" src={e.profileImg} />
                  )}
                </Col>
                <Col xs={12} md={9}>
                  <Card.Title>
                    {e.fullname}
                    <div className="action-button">
                      <Button
                        variant="outline-primary"
                        aria-label={`Editar os dados de ${e.fullname}`}
                        onClick={() => props.handleShowEditModal(i)}
                      >
                        <Pen size={20} weight="light" />
                      </Button>
                      <Button
                        variant="outline-danger"
                        aria-label={`Deletar os dados de ${e.fullname}`}
                        onClick={() => props.handleShowDeleteModal(i)}
                      >
                        <Trash size={20} weight="light" />
                      </Button>
                    </div>
                  </Card.Title>
                  <div className="card-text">
                    <div className="user-info">
                      <span>Idade:</span>
                      <p>{e.age} anos</p>
                    </div>
                    <div className="user-info">
                      <span>CPF:</span>
                      <p>{e.id}</p>
                    </div>
                    <div className="user-info">
                      <span>E-mail:</span>
                      <p>{e.email}</p>
                    </div>
                    <div className="user-info">
                      <span>Endereço:</span>
                      <p>{e.address}</p>
                    </div>
                    <div className="user-info">
                      <span>Data de nascimento:</span>
                      <p>{e.birthdate}</p>
                    </div>
                    <div className="user-info">
                      <span>Status:</span>
                      <p>{statusPeople(e.status)}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CardPeople;
