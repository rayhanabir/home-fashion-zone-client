import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
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
        <Route path={`${path}/manageOrder`}>
          <ManageOrder></ManageOrder>
        </Route>
        <Route path={`${path}/pay`}>
          <Payment></Payment>
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/manageProduct`}>
          <ManageProduct></ManageProduct>
        </Route>
        <Route path={`${path}/addProduct`}>
          <AddProduct></AddProduct>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
      </Switch>
    </>
  );
};

export default DashboardHome;
