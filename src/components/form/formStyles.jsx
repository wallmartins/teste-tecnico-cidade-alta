import styled from "styled-components";
import {
  Form,
  Input,
  Button,
  DatePicker,
  TimePicker,
  InputNumber,
  Switch,
} from "antd";

export const FormWrapper = styled.section`
  width: 100%;
  display: grid;
  justify-items: center;
`;

export const StyledTitle = styled.h1`
  padding: 3rem 0 1rem 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #253c4c;
`;

export const StyledForm = styled(Form)`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  box-shadow: 1px 1px 1px 1px rgba(37, 60, 76, 0.25);
  border-radius: 10px;
  padding: 4rem 5rem 2rem 0;
`;

export const StyledInput = styled(Input)`
  border: 1px solid #253c4c;
`;

export const StyledDatePicker = styled(DatePicker)`
  border: 1px solid #253c4c;
`;

export const StyledTimePicker = styled(TimePicker)`
  border: 1px solid #253c4c;
`;

export const StyledInputNumber = styled(InputNumber)`
  border: 1px solid #253c4c;
`;

export const StyledTextArea = styled(Input.TextArea)`
  border: 1px solid #253c4c;
`;

export const StyledSwitch = styled(Switch)`
  background-color: ${(props) => props.background};
`;

export const StyledButton = styled(Button)`
  background-color: #253c4c;
  border-color: #253c4c;
  margin-right: 20px;

  :hover {
    background-color: #fff;
    border-color: #253c4c;
    color: #253c4c;
  }
`;
