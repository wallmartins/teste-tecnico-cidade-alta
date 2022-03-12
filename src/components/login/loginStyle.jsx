import { Form, Input } from "antd";
import styled from "styled-components";

export const StyledLoginWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
  background: #253c4c;
`;

export const StyledLoginForm = styled(Form)`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  max-height: 100%;
  background: rgba(0, 0, 0, 0.9);
  padding: 2rem;
  color: #fff;
  border-radius: 8px;
`;

export const StyledItem = styled(Form.Item)`
  display: grid;
  justify-content: center;

  label {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const StyledInput = styled(Input)`
  width: 350px;
  border: 3px solid #253c4c;
  border-radius: 5px;
`;

export const StyledPasswordInput = styled(Input.Password)`
  width: 350px;
  border: 3px solid #253c4c;
  border-radius: 5px;
`;

export const StyledInputWrapper = styled.div`
  padding: 1rem 0 3rem 0;
`;

export const StyledButtonWrapper = styled(Form.Item)`
  width: 650px;
  display: flex;
  text-align: center;

  button {
    width: 100px;
    height: 45px;
    background: #253c4c;
    border-color: #253c4c;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;

    :hover {
      background: rgba(0, 0, 0, 0.9);
      border-color: #253c4c;
    }
  }

  label {
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 1rem 0 1.5rem 0;

  img {
    width: 200px;
  }
`;
