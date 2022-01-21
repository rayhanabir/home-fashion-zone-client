import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const url = `http://localhost:5000/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);
  return (
    <div>
      {myOrders.map((myOrder) => (
        <div key={myOrder._id} className="myOrder-container mt-3">
          <div  className="myOrder-card d-flex shadow m-2 p-3 bg-info rounded">
            <h5 className="me-2"><span className="fw-bold">product Name:</span> {myOrder.productName} </h5>
            <h5 className="me-2"> <span className="fw-bold">Email:</span> {myOrder.email} </h5>
            <h5 className="me-2"> <span className="fw-bold">Quantity: </span>{myOrder.quantity} </h5>
            <h5 className="me-2"> <span className="fw-bold">price:</span> {myOrder.price} </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
