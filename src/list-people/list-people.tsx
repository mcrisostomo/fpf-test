import React, { Fragment, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import AddPeople from './add-people';
import CardPeople from './card-people';
import EditPeople from './edit-people';
import DeletePeople from './delete-people';

const ListPeople = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [people, setPeople] = useState<any[]>([]);
  const [index, setIndex] = useState<any>();

  const handleShowAddModal = () => {
    setShowAddModal(true);
  };

  const handleShowEditModal = (index: any) => {
    setShowEditModal(true);

    setIndex(index);
  };

  const handleShowDeleteModal = (index: any) => {
    setShowDeleteModal(true);

    setIndex(index);
  };

  return (
    <Fragment>
      <Row>
        <Col xs={6}>
          <h1>Listar pessoas</h1>
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-end">
          <Button onClick={handleShowAddModal}>Cadastrar nova pessoa</Button>
        </Col>
        {people.length > 0 ? (
          <Col xs={12} className="card-people">
            <CardPeople
              people={people}
              setPeople={setPeople}
              handleShowEditModal={handleShowEditModal}
              handleShowDeleteModal={handleShowDeleteModal}
            />
          </Col>
        ) : (
          <Col xs={12}>
            <span>Não há dados de pessoas para serem exibidos</span>
          </Col>
        )}
      </Row>

      <AddPeople
        showAddModal={showAddModal}
        setShowAddModal={setShowAddModal}
        people={people}
        setPeople={setPeople}
      />

      <EditPeople
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
        people={people}
        setPeople={setPeople}
        index={index}
      />

      <DeletePeople
        showDeleteModal={showDeleteModal}
        setShowDeleteModal={setShowDeleteModal}
        people={people}
        setPeople={setPeople}
        index={index}
      />
    </Fragment>
  );
};

export default ListPeople;
