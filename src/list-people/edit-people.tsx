import React, { useEffect, useRef, useState } from 'react';
import {
  Button,
  Col,
  Form,
  InputGroup,
  Modal,
  Row,
  Spinner,
} from 'react-bootstrap';
import FormPeople from './form-people';

interface Props {
  showEditModal: boolean;
  setShowEditModal: any;
  people: any;
  setPeople: any;
  index: any;
}

const EditPeople = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const profileImg = useRef<HTMLInputElement>(null);
  const fullname = useRef<HTMLInputElement>(null);
  const id = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const birthdate = useRef<HTMLInputElement>(null);
  const gender = useRef<HTMLSelectElement>(null);
  const status = useRef<HTMLSelectElement>(null);

  const [imagemPreview, setImagemPreview] = useState<string>('');

  const handleFileChange = () => {
    const file = profileImg.current?.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagemPreview(imageUrl);
    }
  };

  const handleChooseProfileImage = () => {
    profileImg.current?.click();
  };

  const handleRemoveProfileImage = () => {
    setImagemPreview('');
  };

  const handleUpdatePeople = () => {
    setIsLoading(true);

    const updatePeople = props.people.map((people: any, i: any) =>
      i === props.index
        ? {
            ...people,
            profileImg: imagemPreview,
            fullname: fullname.current?.value,
            id: id.current?.value,
            address: address.current?.value,
            email: email.current?.value,
            phone: phone.current?.value,
            birthdate: birthdate.current?.value,
            gender: gender.current?.value,
            status: status.current?.value,
          }
        : people
    );

    props.setPeople(updatePeople);

    setTimeout(() => {
      setIsLoading(false);

      props.setShowEditModal(false);
    }, 1000);
  };

  useEffect(() => {
    setImagemPreview(
      (props.people[props.index] && props.people[props.index].profileImg) || ''
    );
    fullname.current &&
      (fullname.current.value = props.people[props.index].fullname || '');
    id.current && (id.current.value = props.people[props.index].id || '');
    address.current &&
      (address.current.value = props.people[props.index].address || '');
    email.current &&
      (email.current.value = props.people[props.index].email || '');
    phone.current &&
      (phone.current.value = props.people[props.index].phone || '');
    birthdate.current &&
      (birthdate.current.value = props.people[props.index].birthdate || '');
    gender.current &&
      (gender.current.value = props.people[props.index].gender || '');
    status.current &&
      (status.current.value = props.people[props.index].status || '');
  });

  return (
    <Modal
      show={props.showEditModal}
      size="lg"
      fullscreen={'sm-down'}
      onHide={() => props.setShowEditModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Editando cadastro de{' '}
          {props.people[props.index] && props.people[props.index].fullname}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormPeople
          imagemPreview={imagemPreview}
          profileImg={profileImg}
          handleFileChange={handleFileChange}
          handleChooseProfileImage={handleChooseProfileImage}
          handleRemoveProfileImage={handleRemoveProfileImage}
          fullname={fullname}
          id={id}
          address={address}
          email={email}
          phone={phone}
          birthdate={birthdate}
          gender={gender}
          isEditForm={true}
          status={status}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => props.setShowEditModal(false)}
        >
          Fechar
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={isLoading}
          onClick={() => handleUpdatePeople()}
        >
          {isLoading ? (
            <Spinner animation="border" role="status" size="sm">
              <span className="visually-hidden">Aguarde...</span>
            </Spinner>
          ) : (
            'Salvar'
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPeople;
