import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { attCriminalCode, newCriminalCode } from "../../store/criminalCode";
import moment from "moment-timezone";
import {
  FormWrapper,
  StyledButton,
  StyledDatePicker,
  StyledForm,
  StyledInput,
  StyledInputNumber,
  StyledSwitch,
  StyledTextArea,
  StyledTimePicker,
  StyledTitle,
} from "./formStyles";
import { useNavigate } from "react-router-dom";

function Form({ title, disabled, buttonText, add }) {
  const { data } = useSelector((state) => state.criminalCode.oneCriminalCode);
  const allData = useSelector((state) => state.criminalCode.allCriminalCode);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const date = data?.dataCriacao ? moment(data?.dataCriacao, "YYYY/MM/DD") : "";
  const hour = data?.dataCriacao
    ? moment.utc(data?.dataCriacao).tz("America/Sao_Paulo")
    : "";

  const [cpName, setCpName] = React.useState(data?.nome);
  const [cpDate, setCpDate] = React.useState(date);
  const [cpHour, setCpHour] = React.useState(hour);
  const [cpDesc, setCpDesc] = React.useState(data?.descricao);
  const [cpTicket, setCpTicket] = React.useState(data?.multa);
  const [cpPrison, setCpPrison] = React.useState(data?.tempoPrisao);
  const [cpStatus, setCpStatus] = React.useState(data?.status);

  function handleSubmit() {
    if (!disabled) {
      const dataCriacao = `${moment(cpDate).format("YYYY-MM-DD")}T${moment(
        cpHour
      )
        .utc()
        .format("HH:mm:ss")}:700Z`;

      const id = data?.id ? data?.id : allData.data.length + 1;

      const formData = {
        id: id,
        nome: cpName,
        descricao: cpDesc,
        dataCriacao: dataCriacao,
        multa: cpTicket,
        tempoPrisao: cpPrison,
        status: cpStatus,
      };

      if (buttonText === "Editar") {
        dispatch(
          attCriminalCode({
            ...formData,
          })
        );
      } else if (buttonText === "Salvar") {
        dispatch(
          newCriminalCode({
            ...formData,
          })
        );
      }
    }

    navigate("/");
  }

  return (
    <FormWrapper>
      <StyledTitle>{title}</StyledTitle>
      <StyledForm
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={handleSubmit}
        initialValues={{ remember: true }}
        scrollToFirstError
      >
        <StyledForm.Item
          label="Nome da infração"
          name="Nome da infração"
          initialValue={add ? "" : cpName}
          rules={[
            {
              required: true,
              message: "O campo de nome da infração não pode ficar em branco!",
            },
          ]}
        >
          <StyledInput
            disabled={disabled}
            onChange={({ target }) => setCpName(target.value)}
          />
        </StyledForm.Item>

        <StyledForm.Item
          label="Data de criação da infração"
          name="Data de criação da infração"
          initialValue={add ? "" : cpDate}
          rules={[
            {
              required: true,
              message:
                "O campo de data de criação da infração não pode ficar em branco!",
            },
          ]}
        >
          <StyledDatePicker
            disabled={disabled}
            onChange={(time) => setCpDate(moment(time, "YYYY/MM/DD"))}
            format="DD/MM/YYYY"
          />
        </StyledForm.Item>

        <StyledForm.Item
          label="Hora de criação da infração"
          name="Hora de criação da infração"
          initialValue={add ? "" : cpHour}
          rules={[
            {
              required: true,
              message:
                "O campo de hora de criação da infração não pode ficar em branco!",
            },
          ]}
        >
          <StyledTimePicker
            disabled={disabled}
            format="HH:mm:ss"
            onChange={(hour) =>
              setCpHour(moment.utc(hour).tz("America/Sao_Paulo"))
            }
          />
        </StyledForm.Item>

        <StyledForm.Item
          label="Descrição da infração"
          name="Descrição da infração"
          initialValue={add ? "" : cpDesc}
          rules={[
            {
              required: true,
              message:
                "O campo de descrição da infração não pode ficar em branco!",
            },
          ]}
        >
          <StyledTextArea
            disabled={disabled}
            autoSize={{ minRows: 1, maxRows: 8 }}
            onChange={({ target }) => setCpDesc(target.value)}
          />
        </StyledForm.Item>

        <StyledForm.Item
          label="Valor da multa"
          name="Valor da multa"
          initialValue={add ? "" : cpTicket}
          rules={[
            {
              required: true,
              message: "O campo de valor da multa não pode ficar em branco!",
            },
          ]}
        >
          <StyledInputNumber
            disabled={disabled}
            onChange={(value) => setCpTicket(value)}
          />
        </StyledForm.Item>

        <StyledForm.Item
          label="Tempo de prisão"
          name="Tempo de prisão"
          initialValue={add ? "" : cpPrison}
          rules={[
            {
              required: true,
              message: "O campo de tempo de prisão não pode ficar em branco!",
            },
          ]}
        >
          <StyledInputNumber
            disabled={disabled}
            onChange={(value) => setCpPrison(value)}
          />
        </StyledForm.Item>

        <StyledForm.Item label="Status" valuePropName="checked">
          <StyledSwitch
            disabled={disabled}
            background={cpStatus === 1 ? "#253c4c" : "#ebedf0"}
            checked={cpStatus === 1 ? true : false}
            onChange={(checked) => setCpStatus(checked ? 1 : 2)}
          />
        </StyledForm.Item>

        <StyledForm.Item wrapperCol={{ offset: 8, span: 16 }}>
          {!disabled ? (
            <>
              <StyledButton type="primary" htmlType="submit">
                {buttonText}
              </StyledButton>
              <StyledButton
                onClick={() => navigate("/")}
                type="primary"
                htmlType="submit"
              >
                Voltar
              </StyledButton>
            </>
          ) : (
            <StyledButton type="primary" htmlType="submit">
              Voltar
            </StyledButton>
          )}
        </StyledForm.Item>
      </StyledForm>
    </FormWrapper>
  );
}

export default Form;
