import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../components/login/login";
import List from "../pages/list";
import Info from "../pages/info";
import Edit from "../pages/edit";
import { useSelector } from "react-redux";
import Add from "../pages/add";

const RoutesApp = () => {
  const { user } = useSelector((state) => state.login);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user.length !== 4 && user.data ? <List /> : <Login />}
        />
        <Route
          path="info"
          element={user.length !== 4 && user.data ? <Info /> : <Login />}
        />
        <Route
          path="edit"
          element={user.length !== 4 && user.data ? <Edit /> : <Login />}
        />
        <Route
          path="add"
          element={user.length !== 4 && user.data ? <Add /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
