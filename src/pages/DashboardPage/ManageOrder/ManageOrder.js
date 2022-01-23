import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Table } from "react-bootstrap";
import "./ManageOrder.css";
import swal from "sweetalert";

const ManageOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allorders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);

  const handleDelete = (id) => {
    
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });

        const url = `http://localhost:5000/allorders/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingProduct = allOrders.filter(
                (order) => order._id !== id
              );
              setAllOrders(remainingProduct);
            }
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });


    
     
    
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
