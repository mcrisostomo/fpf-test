import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

interface Props {
  handleFileChange: any;
  handleChooseProfileImage: any;
  handleRemoveProfileImage: any;
  imagemPreview: any;
  profileImg: any;
  profileImgError: any;
  fullname: any;
  fullnameError: any;
  id: any;
  idError: any;
  address: any;
  addressError: any;
  email: any;
  emailError: any;
  phone: any;
  phoneError: any;
  birthdate: any;
  birthdateError: any;
  gender: any;
  genderError: any;
  isEditForm?: boolean;
  status?: any;
  statusError?: any;
}

const FormPeople = (props: Props) => {
  return (
    <Form>
      <Row>
        <Col xs={12} md={3} className="image-area">
          {props.imagemPreview === '' ? (
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
            <img src={props.imagemPreview} className="mb-2" alt="" />
          )}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control
              ref={props.profileImg}
              type="file"
              accept="image/*"
              onChange={props.handleFileChange}
              className="d-none"
            />
            <Form.Text
              ref={props.profileImgError}
              className="invalid-feedback"
            ></Form.Text>
          </Form.Group>
          <Button onClick={() => props.handleChooseProfileImage()}>
            {props.imagemPreview ? 'Alterar ' : 'Adicionar'} foto
          </Button>
          {props.imagemPreview && (
            <Button
              className="my-4"
              variant="danger"
              onClick={() => props.handleRemoveProfileImage()}
            >
              Excluir foto
            </Button>
          )}
        </Col>
        <Col xs={12} md={9}>
          <Form.Group className="mb-3">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              ref={props.fullname}
              type="text"
              placeholder="Digite seu nome"
            />
            <Form.Text
              ref={props.fullnameError}
              className="invalid-feedback"
            ></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              ref={props.id}
              type="text"
              placeholder="99999999999"
              maxLength={11}
            />
            <Form.Text
              ref={props.idError}
              className="invalid-feedback"
            ></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Endereço</Form.Label>
            <Form.Control
              ref={props.address}
              type="text"
              placeholder="Digite seu endereço completo"
              required
            />
            <Form.Text
              ref={props.addressError}
              className="invalid-feedback"
            ></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              ref={props.email}
              type="email"
              placeholder="ex: nome@provedor.com.br"
            />
            <Form.Text
              ref={props.emailError}
              className="invalid-feedback"
            ></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              ref={props.phone}
              type="phone"
              placeholder="11999999999"
              maxLength={11}
            />
            <Form.Text
              ref={props.phoneError}
              className="invalid-feedback"
            ></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data de nascimento</Form.Label>
            <Form.Control
              ref={props.birthdate}
              type="date"
              placeholder="01/10/1966"
            />
            <Form.Text
              ref={props.birthdateError}
              className="invalid-feedback"
            ></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Gênero</Form.Label>
            <Form.Select ref={props.gender}>
              <option>Selecione...</option>
              <option value="1">Masculino</option>
              <option value="2">Feminino</option>
              <option value="3">Outros</option>
            </Form.Select>
            <Form.Text
              ref={props.genderError}
              className="invalid-feedback"
            ></Form.Text>
          </Form.Group>
          {props.isEditForm ? (
            <Form.Group className="mb-3">
              <Form.Label>Status</Form.Label>
              <Form.Select ref={props.status}>
                <option>Selecione...</option>
                <option value="1">Ativo</option>
                <option value="2">Inativo</option>
              </Form.Select>
              <Form.Text
                ref={props.statusError}
                className="invalid-feedback"
              ></Form.Text>
            </Form.Group>
          ) : (
            ''
          )}
        </Col>
      </Row>
    </Form>
  );
};

export default FormPeople;
