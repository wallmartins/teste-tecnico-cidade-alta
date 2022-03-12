import React from "react";
import { useSelector } from "react-redux";
import Form from "../components/form/form";
import Loading from "../components/helper/Loading";

function Edit() {
  const { data, loading } = useSelector(
    (state) => state.criminalCode.oneCriminalCode
  );

  if (loading) return <Loading />;

  return (
    <Form
      title={`Edite a lei de ${data.nome} do código penal`}
      disabled={false}
      buttonText="Editar"
    />
  );
}

export default Edit;
