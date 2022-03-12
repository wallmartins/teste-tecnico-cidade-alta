import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "./helper/createAsyncSlice";

const allUser = createAsyncSlice({
  name: "user",
  fetchConfig: () => ({
    url: "https://my-json-server.typicode.com/cidadealta/exercise/usuarios",
    options: {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
  }),
});

const user = createAsyncSlice({
  name: "user",
  fetchConfig: (user) => ({
    url: `https://my-json-server.typicode.com/cidadealta/exercise/usuarios/${user.id}`,
    options: {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    },
  }),
});

const reducer = combineReducers({
  allUser: allUser.reducer,
  user: user.reducer,
});

const fetchAllUser = allUser.asyncAction;
const fetchUser = user.asyncAction;

export default reducer;

export const login = (data) => async (dispatch) => {
  const { payload } = await dispatch(fetchAllUser(data));
  const userCredentials = payload.filter(
    (user) => user.nome === data.nome && user.senha === data.senha
  );
  await dispatch(fetchUser(...userCredentials));
};
