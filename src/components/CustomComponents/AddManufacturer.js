
import React, { useState } from "react";
import axios from 'axios';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Label,
  Row,
  Col,
  Alert
} from "reactstrap";
import { useHistory } from "react-router-dom";


  
function AddUser() {
  const [loading, setLoading] = useState(false);
  const userType="Manufacturer";
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  //const [seatno, setSeatno] = useState("");
  const [pass, setPass] = useState("");
  //const [standard, setStandard] = useState("");

  let history = useHistory();

  const redirect = () => {
    history.push("/admin/AddManufacturer");
  };

 const myAPI = "https://localhost:44314/api/Users";

  function addManufacturer(newManufacturer,e) {
     
      setLoading(true);
      axios.post(myAPI,newManufacturer)
      .then((response=>{
        console.log(response.data);
        //redirect();
        setname("");
        setEmail("");
        setPass("");
        setLoading(false);
        
        
      }))

      
  }

  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Add Manufacturer</CardTitle>
          </CardHeader>
          <CardBody>
            <Form action="/tables">
              <Row>
                <Col className="pr-1 pl-1" md="6">
                  <FormGroup>
                    <label>Name</label>
                    <Input
                      placeholder="name"
                      type="text"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col className="pl-1 pr-1" md="6">
                  <FormGroup>
                    <label>email</label>
                    <Input
                      placeholder="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col className="pl-1 pr-1" md="4">
                  <FormGroup>
                    <label>Password</label>
                    <Input
                      placeholder="Password"
                      type="password"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>

             {/* <Row>
              <Alert>Success</Alert>
             </Row> */}

              <Row>
                <div className="update ml-auto mr-auto">
                  <Button
                    className="btn-round"
                    color="primary"
                    onClick={() =>
                      addManufacturer({
                        name,
                        email,
                        pass,
                        userType,
                        
                      })
                      
                    }
                  >
                    Add Manufacturer
                  </Button>
                </div>
                
              </Row>
            </Form>
           
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default AddUser;
