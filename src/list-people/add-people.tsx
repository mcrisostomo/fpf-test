import React, { useRef, useState } from 'react';
import {
  Button,
  Col,
  Form,
  InputGroup,
  Modal,
  Row,
  Spinner,
} from 'react-bootstrap';

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
      status: 'ativo',
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
      <Form>
        <Modal.Body>
          <Row>
            <Col xs={12} md={3} className="image-area">
              {imagemPreview === '' ? (
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
                <img src={imagemPreview} className="mb-2" alt="" />
              )}
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control
                  ref={profileImg}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="d-none"
                />
              </Form.Group>
              <Button onClick={() => handleChooseProfileImage()}>
                {imagemPreview ? 'Alterar ' : 'Adicionar'} foto
              </Button>
              {imagemPreview && (
                <Button
                  className="mt-2"
                  variant="danger"
                  onClick={() => handleRemoveProfileImage()}
                >
                  Excluir foto
                </Button>
              )}
            </Col>
            <Col xs={12} md={9}>
              <Form.Group className="mb-3">
                <Form.Label>Nome Completo</Form.Label>
                <Form.Control
                  ref={fullname}
                  type="text"
                  placeholder="Digite seu nome"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CPF</Form.Label>
                <Form.Control
                  ref={id}
                  type="text"
                  placeholder="999.999.999-99"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Endereço</Form.Label>
                <Form.Control
                  ref={address}
                  type="text"
                  placeholder="Digite seu endereço completo"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  ref={email}
                  type="email"
                  placeholder="ex: nome@provedor.com.br"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Telefone</Form.Label>
                <Form.Control
                  ref={phone}
                  type="phone"
                  placeholder="(11) 99999-9999"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Data de nascimento</Form.Label>
                <Form.Control
                  ref={birthdate}
                  type="text"
                  placeholder="01/10/1966"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Gênero</Form.Label>
                <Form.Select ref={gender}>
                  <option>Selecione...</option>
                  <option value="1">Masculino</option>
                  <option value="2">Feminino</option>
                  <option value="3">Outros</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
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
      </Form>
    </Modal>
  );
};

export default AddPeople;
