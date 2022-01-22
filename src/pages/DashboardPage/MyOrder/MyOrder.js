import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
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

  const handleDelete = (id) => {
    const confirm = window.confirm("are your sure you want to delete ?");
    if (confirm) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingOrder = myOrders.filter((order) => order._id != id);
            setMyOrders(remainingOrder);
          }
        });
    }
  };
  return (
    <div>
      {myOrders.map((myOrder) => (
        <div key={myOrder._id} className="myOrder-container mt-3">
          <div className="myOrder-card d-flex shadow m-2 p-3 bg-info rounded">
            <h5 className="me-3">
              <span className="fw-bold">product Name:</span>{" "}
              {myOrder.productName}{" "}
            </h5>

            <h5 className="me-3">
              {" "}
              <span className="fw-bold">Quantity: </span>
              {myOrder.quantity}{" "}
            </h5>
            <h5 className="me-3">
              {" "}
              <span className="fw-bold">price:</span> {myOrder.price}{" "}
            </h5>
            <h5 className="me-3" onClick={() => handleDelete(myOrder._id)}>
              <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
