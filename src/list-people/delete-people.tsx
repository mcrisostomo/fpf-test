import React, { useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';

interface Props {
  showDeleteModal: boolean;
  setShowDeleteModal: any;
  people: any;
  setPeople: any;
  index: any;
}

const DeletePeople = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDeletePeople = () => {
    setIsLoading(true);

    const updatePeople = props.people.filter((_: any, i: any) => {
      return i !== props.index;
    });

    props.setPeople(updatePeople);

    setTimeout(() => {
      setIsLoading(false);

      props.setShowDeleteModal(false);
    }, 1000);
  };

  return (
    <Modal
      show={props.showDeleteModal}
      fullscreen={'sm-down'}
      onHide={() => props.setShowDeleteModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Removendo cadastro de{' '}
          {props.people[props.index] && props.people[props.index].fullname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>
          Tem certeza de que deseja remover o cadastro de{' '}
          {props.people[props.index] && props.people[props.index].fullname}?
        </h4>
        <p className="p-0">Esta ação não poderá ser desfeita</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => props.setShowDeleteModal(false)}
        >
          Fechar
        </Button>
        <Button
          type="button"
          variant="primary"
          disabled={isLoading}
          onClick={() => handleDeletePeople()}
        >
          {isLoading ? (
            <Spinner animation="border" role="status" size="sm">
              <span className="visually-hidden">Aguarde...</span>
            </Spinner>
          ) : (
            'Continuar'
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePeople;
