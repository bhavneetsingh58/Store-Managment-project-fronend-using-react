import axios from "axios";
//import Dashboard from 'layouts/Admin';
import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import Label from "reactstrap/lib/Label";

const myAPI = "https://localhost:44314/api/Login";

function EditUser(props) {
  // const initialValue = {
  //   name: props.myData.name,
  //   email: props.myData.email,
  //   pass: "",
  //   userType: "dealer",
  //   id: props.myData.UserID,
  // };
  
  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState({ 
    userID: props.User.userID,
    name: props.User.name,
    email: props.User.email,
    pass: props.User.pass,
    userType: "Dealer",
   });

  const toggle = () => setModal(!modal);
  const onSubmit = async (e) => {
    e.preventDefault();
  };

  const EditOnSubmit = () =>{
    const myAPI2 = "https://localhost:44314/api/Users/" + props.User.userID;
    axios.put(myAPI2,userInfo)
      .then((response=>{
        console.log(response);
      }))
  }


  
  const onChange = async (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
    const myAPI2 = "https://localhost:44314/api/Users/" + props.User.userID;
    axios.put(myAPI2,userInfo)
      .then((response=>{
        console.log(response);
      }))

  };
    return (
      <>
        <div className="content">
          <Button className="btn-round" color="danger" onClick={toggle}>
            Edit
          </Button>

          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Edit User</ModalHeader>
            <Form>
              <ModalBody className=" ml-5 mr-5">
                <div>
                  <Form action="/tables">
                    <Row>
                      <Col className="pl-1 pr-1" md="6">
                        <FormGroup>
                          <label>UserID</label>
                          <Input
                            placeholder="User ID"
                            type="number"
                            name="userID"
                            value={userInfo.userID}
                            onChange={onChange}
                          />
                        </FormGroup>
                      </Col>

                      <Col className="pr-1 pl-1" md="6">
                        <FormGroup>
                          <label>Name</label>
                          <Input
                            placeholder="name"
                            type="text"
                            value={userInfo.name}
                            name="name"
                            onChange={onChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pl-1 pr-1" md="6">
                        <FormGroup>
                          <label>email</label>
                          <Input
                            placeholder="email"
                            type="email"
                            name="email"
                            value={userInfo.email}
                            onChange={onChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1 pr-1" md="6">
                        <FormGroup>
                          <label>Password</label>
                          <Input
                            placeholder="Password"
                            type="password"
                            name="pass"
                            value={userInfo.pass}
                            onChange={onChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    {/* <Row>
              <Alert>Success</Alert>
             </Row> */}


                  </Form>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" color="primary" onClick={onChange}>
                  Submit
                </Button>
              </ModalFooter>
            </Form>
          </Modal>
        </div>
      </>
    );
 
}
export default EditUser;
