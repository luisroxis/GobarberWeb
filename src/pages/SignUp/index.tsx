import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import console from 'console';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/images/logo.svg';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome Obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().min(6, 'Deve conter no minimo 6 digitos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="Gobarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="Email" type="email" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="/">
          <FiArrowLeft />
          Voltar para Logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
