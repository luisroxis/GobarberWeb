import React from "react";
import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/images/logo.svg";
import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Gobarber" />
        <form>
          <h1>Faça seu Logon</h1>
          <input placeholder="Email" type="email" />
          <input placeholder="Senha" type="password" />
          <button type="submit">Entrar</button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="/">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
