import React, { useState, useEffect } from "react";
import axios from "axios";
import EditUser from '../CustomComponents/EditManufacturer';
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Button,
} from "reactstrap";
const myAPI = "https://localhost:44314/api/Users/";

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
          <CardTitle>Manufacturers Table</CardTitle>
        </CardHeader>
        <CardBody>
          <Table responsive>
            <thead className="text-primary">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>email</th>
                <th className="text-center">Edit User</th>
                <th className="text-center">Remove User</th>
              </tr>
            </thead>
            <tbody>
              {myData.map((User) => (
               User.userType == "Manufacturer"?
                <tr>
                  <th scope="row">{User.userID}</th>
                  <td>{User.name}</td>
                  <td>{User.email}</td>
                  <td className="text-center">
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
                  </td>
                </tr>
                :""
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}

export default UserData;
