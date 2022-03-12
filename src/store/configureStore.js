import { configureStore, combineReducers } from "@reduxjs/toolkit";
import criminalCode from "./criminalCode";
import login from "./login";

const reducer = combineReducers({ login, criminalCode });
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
