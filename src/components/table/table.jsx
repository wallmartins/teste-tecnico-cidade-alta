import React from "react";
import moment from "moment-timezone";
import { useDispatch, useSelector } from "react-redux";
import {
  dltCriminalCode,
  listCriminalCode,
  oneCriminalCode,
} from "../../store/criminalCode";
import { Button, Space } from "antd";
import InfoIcon from "../../img/info.svg";
import EditIcon from "../../img/edit.svg";
import DeleteIcon from "../../img/delete.svg";
import {
  StyledButton,
  StyledTable,
  TableContent,
  TableWrapper,
} from "./tableStyle";
import { Link } from "react-router-dom";
import Loading from "../helper/Loading";

function Table() {
  const { data, loading } = useSelector(
    (state) => state.criminalCode.allCriminalCode
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(listCriminalCode());
  }, [dispatch]);

  const dataSource = [];

  data?.map((data) =>
    dataSource.push({
      key: data.id,
      nome: data.nome,
      data: moment(data?.dataCriacao, "YYYY/MM/DD"),
      multa: data.multa,
      status: data.status === 1 ? "Ativo" : "Inativo",
    })
  );

  const columns = [
    {
      title: "Nome",
      dataIndex: "nome",
      key: "nome",
      filters: [],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.nome.startsWith(value),
      width: "30%",
    },
    {
      title: "Data",
      dataIndex: "data",
      key: "data",
      sorter: (a, b) => a.multa - b.multa,
      width: "20%",
    },
    {
      title: "Multa",
      dataIndex: "multa",
      key: "multa",
      sorter: (a, b) => a.multa - b.multa,
      width: "20%",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        {
          text: "Ativo",
          value: "Ativo",
        },
        {
          text: "Inativo",
          value: "Inativo",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.status.startsWith(value),
      width: "15%",
    },
    {
      title: "Action",
      key: "action",
      width: "15%",
      render: (text) => (
        <>
          <Space size="large">
            <Link to="/info">
              <Button
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  padding: 0,
                }}
                onClick={() => {
                  dispatch(oneCriminalCode(text.key));
                }}
              >
                <img
                  src={InfoIcon}
                  alt="ícone contendo um círculo com um i dentro"
                />
              </Button>
            </Link>
            <Link to="/edit">
              <Button
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  padding: 0,
                }}
                onClick={() => {
                  dispatch(oneCriminalCode(text.key));
                }}
              >
                <img src={EditIcon} alt="ícone contendo um lápis na diagonal" />
              </Button>
            </Link>
            <Button
              style={{
                cursor: "pointer",
                border: "none",
                background: "none",
                padding: 0,
              }}
              onClick={() => {
                if (
                  window.confirm("Are you sure you wish to delete this item?")
                )
                  dispatch(dltCriminalCode(text.key));
              }}
            >
              <img src={DeleteIcon} alt="ícone contendo uma lixeira" />
            </Button>
          </Space>
        </>
      ),
    },
  ];

  dataSource.map(({ nome }) =>
    columns[0].filters.push({
      text: nome,
      value: nome,
    })
  );

  if (loading) return <Loading />;

  return (
    <TableWrapper>
      <TableContent>
        <Link to="/add">
          <StyledButton>Incluir nova lei</StyledButton>
        </Link>
        <StyledTable
          dataSource={dataSource}
          columns={columns}
          title={() => "Listagem dos Códigos Penais"}
          pagination={{ position: ["bottomCenter"] }}
        />
      </TableContent>
    </TableWrapper>
  );
}

export default Table;
