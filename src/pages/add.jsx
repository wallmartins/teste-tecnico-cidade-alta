import React from "react";
import Form from "../components/form/form";

function Add() {
  return (
    <Form
      title={`Adicione uma nova lei ao código penal`}
      disabled={false}
      buttonText="Salvar"
      add={true}
    />
  );
}

export default Add;
