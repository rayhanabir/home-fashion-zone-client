import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";
import "./ManageOrder.css";
const ManageOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allorders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const handleDelete = (id) => {
    const procced = window.confirm(
      "Are You Sure You want to delete this item?"
    );
    if (procced) {
      const url = `http://localhost:5000/allorders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingProduct = allOrders.filter(
              (order) => order._id !== id
            );
            setAllOrders(remainingProduct);
          }
        });
    }
  };

  return (
    <>
      <div className="all-order-container m-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {allOrders.map((order) => (
            <tbody key={order._id}>
              <tr>
                <td>{order.productName}</td>
                <td>{order.email}</td>
                <td>{order.address}</td>
                <td>{order.phone}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td onClick={() => handleDelete(order._id)}>
                  {" "}
                  <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default ManageOrder;
