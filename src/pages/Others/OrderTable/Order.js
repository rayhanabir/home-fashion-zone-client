import React from "react";
import { Table } from "react-bootstrap";

const Order = ({ order }) => {
  const { name } = order;
  return (
    <>
      {/* <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table> */}
    </>
  );
};

export default Order;
