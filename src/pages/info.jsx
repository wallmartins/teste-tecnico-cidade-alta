import React from "react";
import { useSelector } from "react-redux";
import Form from "../components/form/form";
import Loading from "../components/helper/Loading";

function Info() {
  const { data, loading } = useSelector(
    (state) => state.criminalCode.oneCriminalCode
  );

  if (loading) return <Loading />;

  return (
    <Form
      title={`Tudo sobre a lei de ${data.nome} do código penal`}
      disabled={true}
    />
  );
}

export default Info;
