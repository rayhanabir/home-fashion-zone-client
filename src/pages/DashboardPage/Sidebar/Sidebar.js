import React from "react";
import { Link } from "react-router-dom";
import {
  useRouteMatch,
} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import "./Sidebaar.css";
const Sidebar = () => {
  let { url } = useRouteMatch();
  const { admin, logOut } = useAuth();

  return (
    <>
      <div className="sidebar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to={`${url}/pay`}>pay</Link>
          </li>
          <li>
            <Link to={`${url}/myOrder`}>My Order</Link>
          </li>
          <li>
            <Link to={`${url}/review`}>Review</Link>
          </li>
          {admin && (
            <div>
              <li>
                <Link to={`${url}/manageOrder`}>Manage All Order</Link>
              </li>
              <li>
                <Link to={`${url}/makeAdmin`}>Make Admin</Link>
              </li>
              <li>
                <Link to={`${url}/manageProduct`}>Mangae Product</Link>
              </li>
              <li>
                <Link to={`${url}/addProduct`}>Add a Product</Link>
              </li>
            </div>
          )}
          <div className="logout-btn">
            <button onClick={logOut}>LogOut</button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
