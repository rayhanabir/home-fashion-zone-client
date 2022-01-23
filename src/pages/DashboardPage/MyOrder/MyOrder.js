import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../../hooks/useAuth";
import { Alert } from "react-bootstrap";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    const url = `http://localhost:5000/orders?email=${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, []);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });

        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setIsDelete(true);
              const remainingOrder = myOrders.filter(
                (order) => order._id != id
              );
              setMyOrders(remainingOrder);
            }
          });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };
  return (
    <div>
      {myOrders.map((myOrder) => (
        <div key={myOrder._id} className="myOrder-container mt-3">
          <div className="myOrder-card d-flex shadow m-2 p-3 bg-light rounded w-75">
            <h5 className="me-3">
              <span className="fw-bold">product Name:</span>
              {myOrder.productName}
            </h5>

            <h5 className="me-3">
              <span className="fw-bold">Quantity: </span>
              {myOrder.quantity}
            </h5>
            <h5 className="me-3">
              <span className="fw-bold">price:</span> {myOrder.price}
            </h5>
            <h5 className="me-3" onClick={() => handleDelete(myOrder._id)}>
              <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
            </h5>
          </div>
        </div>
      ))}
      {isDelete && (
        <Alert style={{ width: "50%", margin: "auto" }} variant="success">
          Deleted Successfully
        </Alert>
      )}
    </div>
  );
};

export default MyOrder;
