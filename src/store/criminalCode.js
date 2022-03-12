import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "./helper/createAsyncSlice";

const criminalCode = createAsyncSlice({
  name: "criminalCode",
  fetchConfig: () => ({
    url: "https://my-json-server.typicode.com/cidadealta/exercise/codigopenal",
    options: {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
  }),
});

const getOneCriminalCode = createAsyncSlice({
  name: "getOneCriminalCode",
  fetchConfig: (id) => ({
    url: `https://my-json-server.typicode.com/cidadealta/exercise/codigopenal/${id}`,
    options: {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
  }),
});

const putCriminalCode = createAsyncSlice({
  name: "putCriminalCode",
  fetchConfig: (data) => ({
    url: `https://my-json-server.typicode.com/cidadealta/exercise/codigopenal/${data.id}`,
    options: {
      method: "PUT",
      body: JSON.stringify({ data }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
  }),
});

const deleteCriminalCode = createAsyncSlice({
  name: "deleteCriminalCode",
  fetchConfig: (id) => ({
    url: `https://my-json-server.typicode.com/cidadealta/exercise/codigopenal/${id}`,
    options: {
      method: "DELETE",
    },
  }),
});

const addCriminalCode = createAsyncSlice({
  name: "addCriminalCode",
  fetchConfig: (data) => ({
    url: `https://my-json-server.typicode.com/cidadealta/exercise/codigopenal/`,
    options: {
      method: "POST",
      body: JSON.stringify({ data }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
  }),
});

const reducer = combineReducers({
  allCriminalCode: criminalCode.reducer,
  attCriminalCode: putCriminalCode.reducer,
  oneCriminalCode: getOneCriminalCode.reducer,
  deleteCriminalCode: deleteCriminalCode.reducer,
  addCriminalCode: addCriminalCode.reducer,
});

const fetchCriminalCode = criminalCode.asyncAction;
const fetchPutCriminalCode = putCriminalCode.asyncAction;
const fetchGetOneCriminalCode = getOneCriminalCode.asyncAction;
const fetchDeleteCriminalCode = deleteCriminalCode.asyncAction;
const fetchAddCriminalCode = addCriminalCode.asyncAction;

export default reducer;

export const listCriminalCode = () => (dispatch) => {
  dispatch(fetchCriminalCode());
};

export const attCriminalCode = (data) => async (dispatch) => {
  await dispatch(fetchPutCriminalCode(data));
};

export const oneCriminalCode = (id) => async (dispatch) => {
  await dispatch(fetchGetOneCriminalCode(id));
};

export const dltCriminalCode = (id) => async (dispatch) => {
  await dispatch(fetchDeleteCriminalCode(id));
};

export const newCriminalCode = (data) => async (dispatch) => {
  await dispatch(fetchAddCriminalCode(data));
};
