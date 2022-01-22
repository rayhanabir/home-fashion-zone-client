import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrder from "../ManageOrder/ManageOrder";
import ManageProduct from "../ManageProduct/ManageProduct";
import MyOrder from "../MyOrder/MyOrder";
import Payment from "../Payment/Payment";
import Review from "../Review/Review";

const DashboardHome = () => {
  let { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/myOrder`}>
          <MyOrder></MyOrder>
        </Route>
        <AdminRoute path={`${path}/manageOrder`}>
          <ManageOrder></ManageOrder>
        </AdminRoute>
        <Route path={`${path}/pay`}>
          <Payment></Payment>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProduct`}>
          <ManageProduct></ManageProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct></AddProduct>
        </AdminRoute>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
      </Switch>
    </>
  );
};

export default DashboardHome;
