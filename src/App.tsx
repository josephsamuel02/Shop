import React from "react";
import { Route, Routes } from "react-router-dom";
import ROUTES from "./utils/Routes";
import Login from "./pages/Login/LogInPage.tsx";
import Page404 from "./pages/404_Page.tsx";
import ForgotPassword from "./pages/Auth/ForgotPassword.tsx";
import Dashboard from "./pages/Dashboard/index.tsx";
import OrderDetails from "./pages/OrderDetails/OrderDetails.tsx";
import ProductDetails from "./pages/ProductDetails/index.tsx";
import Store from "./pages/Dashboard/Store.tsx";
const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index path={ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={ROUTES.STORE} element={<Store />} />
        <Route path={ROUTES.ORDERDETAILS} element={<OrderDetails />} />
        <Route path={ROUTES.PRODUCTDETAILS} element={<ProductDetails />} />

        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.FORGOTPASSWORD} element={<ForgotPassword />} />

        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
