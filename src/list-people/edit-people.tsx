import React, { useEffect, useRef, useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import FormPeople from './form-people';
import FormValidate from '../components/form-validate/form-validate';

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
  const profileImgError = useRef<HTMLInputElement>(null);
  const fullname = useRef<HTMLInputElement>(null);
  const fullnameError = useRef<HTMLInputElement>(null);
  const id = useRef<HTMLInputElement>(null);
  const idError = useRef<HTMLInputElement>(null);
  const address = useRef<HTMLInputElement>(null);
  const addressError = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const emailError = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const phoneError = useRef<HTMLInputElement>(null);
  const birthdate = useRef<HTMLInputElement>(null);
  const birthdateError = useRef<HTMLInputElement>(null);
  const gender = useRef<HTMLSelectElement>(null);
  const genderError = useRef<HTMLSelectElement>(null);
  const status = useRef<HTMLSelectElement>(null);
  const statusError = useRef<HTMLSelectElement>(null);

  const [imagemPreview, setImagemPreview] = useState<string>('');

  const handleFileChange = () => {
    setImagemPreview('');

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

  const updateData = () => {
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

  const handleUpdatePeople = () => {
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
      updateData();
  };

  useEffect(() => {
    if (props.people[props.index]) {
      setImagemPreview(
        (props.people[props.index] && props.people[props.index].profileImg) ||
          ''
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
    }
  }, [props.people, props.index]);

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
          isEditForm={true}
          status={status}
          statusError={statusError}
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
