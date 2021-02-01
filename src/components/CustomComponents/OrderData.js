import React, { useState, useEffect } from "react";
import axios from "axios";
import EditUser from './EditUser';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Button,
} from "reactstrap";
const myAPI = "https://localhost:44314/api/Order/";

function UserData() {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  });

  const getData = () => {
    axios.get(myAPI).then((response) => {
      setMyData(response.data);
      console.log(response.data);
    });
  };

  const DeleteUser = (id) => {
    axios.delete(myAPI+id)
    .catch((err) => {
        console.error(err);
      });
      getData();
  };



  return (
    <div className="content">
      <Card>
        <CardHeader tag="h3" className="text-center">
          <CardTitle>Dealers Table</CardTitle>
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead className="text-primary">
              <tr>
                <th>Order ID</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Dealer ID</th>
                <th>Dealer Name</th>
                {/* <th className="text-center">Edit </th>
                <th className="text-center">Remove </th> */}
              </tr>
            </thead>
            <tbody>
              {myData.map((Order) => (
              
                <tr>
                  <th scope="row">{Order.orderID}</th>
                  <td>{Order.productID}</td>
                  <td>{Order.prodName}</td>
                  <td>{Order.userID}</td>
                  <td>{Order.userName}</td>
                  {/* <td className="text-center">
                    <EditUser
                    {...{ loading, User }}
                    // onSubmit={onSubmit}
                  />

                  </td>
                  <td className="text-center">
                    <Button
                      className="btn-round"
                      color="danger"
                      
                      onClick={()=>DeleteUser(User.userID)}
                       disabled={loading}
                    >
                     
                      {loading ? "Removing" : "Remove"}
                    </Button>
                  </td> */}
                </tr>
                
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default UserData;
