import styled from "styled-components";
import { Button, Table } from "antd";

export const TableWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: grid;
  align-items: center;
`;

export const TableContent = styled.div`
  width: 85%;
  display: grid;
  justify-items: flex-end;
  margin: 0 auto;
`;

export const StyledButton = styled(Button)`
  font-family: "Montserrat", sans-serif;
  height: 45px;
  background: #253c4c;
  border: none;
  border-radius: 5px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 1rem;

  :hover {
    background: #fff;
    color: #253c4c;
    border: 1px solid #253c4c;
  }
`;

export const StyledTable = styled(Table)`
  width: 100%;
  margin: 0 auto;

  .ant-table-title {
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    padding: 1.5rem 0;
    border: 1px solid #f0f0f0;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
    color: #253c4c;
  }

  .ant-table-column-title,
  .ant-table-cell {
    color: #253c4c;
  }

  .ant-pagination-item-active {
    border-color: #253c4c;

    a {
      color: #253c4c;
    }
  }
`;
