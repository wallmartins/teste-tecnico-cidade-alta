import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/login";
import {
  StyledLoginForm,
  StyledInputWrapper,
  StyledLoginWrapper,
  StyledInput,
  StyledItem,
  StyledPasswordInput,
  StyledButtonWrapper,
  ImageWrapper,
} from "./loginStyle";
import Logo from "../../img/cidade-alta.png";
import { Button } from "antd";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  async function handleSubmit() {
    const data = { nome: username, senha: password };

    dispatch(login(data));
  }

  return (
    <StyledLoginWrapper>
      <StyledLoginForm
        layout="vertical"
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <ImageWrapper style={{ textAlign: "center" }}>
          <img
            src={Logo}
            alt="Logo do RP escrito alta em caixa alta na cor azul e escrito cidade e season 2 na cor branca"
          />
        </ImageWrapper>
        <StyledInputWrapper>
          <StyledItem
            label="Usuário:"
            name="username"
            rules={[
              {
                required: true,
                message: "Por favor informe seu usuário!",
              },
            ]}
          >
            <StyledInput onChange={({ target }) => setUsername(target.value)} />
          </StyledItem>

          <StyledItem
            label="Senha:"
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor informe a sua senha!",
              },
            ]}
          >
            <StyledPasswordInput
              onChange={({ target }) => setPassword(target.value)}
            />
          </StyledItem>
        </StyledInputWrapper>

        <StyledButtonWrapper>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </StyledButtonWrapper>
      </StyledLoginForm>
    </StyledLoginWrapper>
  );
};

export default Login;
