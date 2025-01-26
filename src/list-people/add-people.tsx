import React, { useRef, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import FormPeople from './form-people';
import FormValidate from '../components/form-validate/form-validate';

interface Props {
  showAddModal: boolean;
  setShowAddModal: any;
  people: any;
  setPeople: any;
}

const AddPeople = (props: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const profileImg = useRef<HTMLInputElement>(null);
  const profileImgError = useRef<HTMLDivElement>(null);
  const fullname = useRef<HTMLInputElement>(null);
  const fullnameError = useRef<HTMLDivElement>(null);
  const id = useRef<HTMLInputElement>(null);
  const idError = useRef<HTMLDivElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const addressError = useRef<HTMLDivElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const emailError = useRef<HTMLDivElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const phoneError = useRef<HTMLDivElement>(null);
  const birthdate = useRef<HTMLInputElement>(null);
  const birthdateError = useRef<HTMLDivElement>(null);
  const gender = useRef<HTMLSelectElement>(null);
  const genderError = useRef<HTMLDivElement>(null);

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

  const closeModal = () => {
    props.setShowAddModal(false);

    handleRemoveProfileImage();
    profileImg.current && (profileImg.current.value = '');
    fullname.current && (fullname.current.value = '');
    id.current && (id.current.value = '');
    address.current && (address.current.value = '');
    email.current && (email.current.value = '');
    phone.current && (phone.current.value = '');
    birthdate.current && (birthdate.current.value = '');
    gender.current && (gender.current.value = '');
  };

  const saveData = () => {
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

  const handleSavePeople = () => {
    const params = {
      imagemPreview,
      profileImg,
      profileImgError,
      fullname,
      fullnameError,
      id,
      idError,
      address,
      addressError,
      email,
      emailError,
      phone,
      phoneError,
      birthdate,
      birthdateError,
      gender,
      genderError,
    };

    FormValidate(params).imageValidate() &&
      FormValidate(params).fullnameValidate() &&
      FormValidate(params).idValidate() &&
      FormValidate(params).addressValidate() &&
      FormValidate(params).emailValidate() &&
      FormValidate(params).phoneValidate() &&
      FormValidate(params).birthdateValidate() &&
      FormValidate(params).genderValidate() &&
      saveData();
  };

  return (
    <Modal
      show={props.showAddModal}
      size="lg"
      fullscreen={'sm-down'}
      onHide={() => closeModal()}
    >
      <Modal.Header closeButton>
        <Modal.Title>Cadastro de nova pessoa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormPeople
          handleFileChange={handleFileChange}
          handleChooseProfileImage={handleChooseProfileImage}
          handleRemoveProfileImage={handleRemoveProfileImage}
          imagemPreview={imagemPreview}
          profileImg={profileImg}
          profileImgError={profileImgError}
          fullname={fullname}
          fullnameError={fullnameError}
          id={id}
          idError={idError}
          address={address}
          addressError={addressError}
          email={email}
          emailError={emailError}
          phone={phone}
          phoneError={phoneError}
          birthdate={birthdate}
          birthdateError={birthdateError}
          gender={gender}
          genderError={genderError}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeModal()}>
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
