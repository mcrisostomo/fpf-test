import React, { useRef, useState } from 'react';
import { Button, Col, Form, Modal, Row, Spinner } from 'react-bootstrap';
import FormPeople from './form-people';

interface Props {
  showAddModal: boolean;
  setShowAddModal: any;
  people: any;
  setPeople: any;
}

const AddPeople = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const profileImg = useRef<HTMLInputElement>(null);
  const fullname = useRef<HTMLInputElement>(null);
  const id = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const birthdate = useRef<HTMLInputElement>(null);
  const gender = useRef<HTMLSelectElement>(null);

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

  const handleSavePeople = () => {
    setIsLoading(true);

    const formData = {
      profileImg: imagemPreview,
      fullname: fullname.current?.value,
      id: id.current?.value,
      address: address.current?.value,
      email: email.current?.value,
      phone: phone.current?.value,
      birthdate: birthdate.current?.value,
      gender: gender.current?.value,
      status: '1',
    };

    props.setPeople([...props.people, formData]);

    setTimeout(() => {
      setIsLoading(false);

      props.setShowAddModal(false);
    }, 1000);
  };

  return (
    <Modal
      show={props.showAddModal}
      size="lg"
      fullscreen={'sm-down'}
      onHide={() => props.setShowAddModal(false)}
    >
      <Modal.Header closeButton>
        <Modal.Title>Cadastro de nova pessoa</Modal.Title>
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
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => props.setShowAddModal(false)}
        >
          Fechar
        </Button>
        <Button
          type="submit"
          variant="primary"
          disabled={isLoading}
          onClick={() => handleSavePeople()}
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

export default AddPeople;
