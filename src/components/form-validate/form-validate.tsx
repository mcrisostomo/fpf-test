export default function FormValidate(field: any) {
  const imageValidate = () => {
    if (field.imagemPreview === '') {
      field.profileImgError.current?.classList.add('d-block');
      field.profileImgError.current &&
        (field.profileImgError.current.innerHTML =
          'Selecione uma imagem de perfil');

      return false;
    } else {
      field.profileImgError.current?.classList.remove('d-block');
      field.profileImgError.current &&
        (field.profileImgError.current.innerHTML = '');
      return true;
    }
  };

  const fullnameValidate = () => {
    const fullnameRegex = /^[A-Za-z]{2,}(?:\s[A-Za-z]{2,})+$/;

    if (field.fullname.current?.value === '') {
      field.fullnameError.current?.classList.add('d-block');
      field.fullnameError.current &&
        (field.fullnameError.current.innerHTML =
          'O campo Nome Completo está vazio');

      return false;
    } else {
      if (fullnameRegex.test(`${field.fullname.current?.value}`)) {
        field.fullnameError.current?.classList.remove('d-block');
        field.fullnameError.current &&
          (field.fullnameError.current.innerHTML = '');
        return true;
      } else {
        field.fullname.current?.classList.add('d-block');
        field.fullname.current &&
          (field.fullnameError.current.innerHTML =
            'O nome digitado precisa ter no mímino 2 letras, a primeira letra não pode ser um número e precisa ter pelo menos um espaço');
        return false;
      }
    }
  };

  const idValidate = () => {
    const idRegex = /^(?!(\d)\1{10})\d{11}$/;

    if (field.id.current?.value === '') {
      field.idError.current?.classList.add('d-block');
      field.idError.current &&
        (field.idError.current.innerHTML = 'O campo CPF está vazio');

      return false;
    } else {
      if (idRegex.test(`${field.id.current?.value}`)) {
        field.idError.current?.classList.remove('d-block');
        field.idError.current && (field.idError.current.innerHTML = '');
        return true;
      } else {
        field.id.current?.classList.add('d-block');
        field.id.current && (field.idError.current.innerHTML = 'CPF inválido');
        return false;
      }
    }
  };

  const addressValidate = () => {
    if (field.address.current?.value === '') {
      field.addressError.current?.classList.add('d-block');
      field.addressError.current &&
        (field.addressError.current.innerHTML = 'O campo Endereço está vazio');

      return false;
    } else {
      field.addressError.current?.classList.remove('d-block');
      field.addressError.current && (field.addressError.current.innerHTML = '');
      return true;
    }
  };

  const emailValidate = () => {
    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

    if (field.email.current?.value === '') {
      field.emailError.current?.classList.add('d-block');
      field.emailError.current &&
        (field.emailError.current.innerHTML = 'O campo E-mail está vazio');
      return false;
    } else {
      if (emailRegex.test(`${field.email.current?.value}`)) {
        field.emailError.current?.classList.remove('d-block');
        field.emailError.current && (field.emailError.current.innerHTML = '');
        return true;
      } else {
        field.emailError.current?.classList.add('d-block');
        field.emailError.current &&
          (field.emailError.current.innerHTML =
            'O e-mail digitado não é valido');
        return false;
      }
    }
  };

  const phoneValidate = () => {
    const phoneRegex = /^\d{2}\d{4,5}\d{4}$/;

    if (field.phone.current?.value === '') {
      field.phoneError.current?.classList.add('d-block');
      field.phoneError.current &&
        (field.phoneError.current.innerHTML = 'O campo Telefone está vazio');

      return false;
    } else {
      if (phoneRegex.test(`${field.phone.current?.value}`)) {
        field.phoneError.current?.classList.remove('d-block');
        field.phoneError.current && (field.phoneError.current.innerHTML = '');
        return true;
      } else {
        field.phoneError.current?.classList.add('d-block');
        field.phoneError.current &&
          (field.phoneError.current.innerHTML = 'Telefone inválido');
        return false;
      }
    }
  };

  const birthdateValidate = () => {
    const birthdateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;

    if (field.birthdate.current?.value === '') {
      field.birthdateError.current?.classList.add('d-block');
      field.birthdateError.current &&
        (field.birthdateError.current.innerHTML =
          'O campo Data de nascimento está vazio');

      return false;
    } else {
      if (birthdateRegex.test(`${field.birthdate.current?.value}`)) {
        field.birthdateError.current?.classList.remove('d-block');
        field.birthdateError.current &&
          (field.birthdateError.current.innerHTML = '');
        return true;
      } else {
        field.birthdateError.current?.classList.add('d-block');
        field.birthdateError.current &&
          (field.birthdateError.current.innerHTML =
            'Data de nascimento inválida');
        return false;
      }
    }
  };

  const genderValidate = () => {
    if (field.gender.current?.selectedIndex === 0) {
      field.genderError.current?.classList.add('d-block');
      field.genderError.current &&
        (field.genderError.current.innerHTML = 'Selecione um gênero');

      return false;
    } else {
      field.genderError.current?.classList.remove('d-block');
      field.genderError.current && (field.genderError.current.innerHTML = '');
      return true;
    }
  };

  const statusValidate = () => {
    if (field.status.current?.selectedIndex === 0) {
      field.statusError.current?.classList.add('d-block');
      field.statusError.current &&
        (field.statusError.current.innerHTML = 'Selecione um status');

      return false;
    } else {
      field.statusError.current?.classList.remove('d-block');
      field.statusError.current && (field.statusError.current.innerHTML = '');
      return true;
    }
  };

  return {
    imageValidate,
    fullnameValidate,
    idValidate,
    addressValidate,
    emailValidate,
    phoneValidate,
    birthdateValidate,
    genderValidate,
    statusValidate,
  };
}
