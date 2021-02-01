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

function EditManufacturer(props) {

  
  const [modal, setModal] = useState(false);
  const [userInfo, setUserInfo] = useState({ 
    userID: props.User.userID,
    name: props.User.name,
    email: props.User.email,
    pass: props.User.pass,
    userType: "Manufacturer",
   });
  const [nameErr,setNameErr] = useState("");
  const [emailErr,setEmailErr] = useState("");
  const [passErr,setPassErr] = useState(""); 

  const toggle = () => setModal(!modal);
  const onSubmit = async (e) => {
    e.preventDefault();
  };
  
const formValidation = () =>{
        const nameErr = {};
        const emailErr ={};
        const passErr = {};
        let isValid = true;
        var emailRegex = /[^@]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/
        var nameRegex =/[a-zA-Z]{3,20}/
        var passRegex =/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/

        if(userInfo.name==""){
            nameErr.NoValueFound = "Please Enter a Value";
            isValid =false;
        }       
        else if(!(nameRegex.test(userInfo.name))){
            nameErr.IncorrectFormat = "Incorrect Format";
            isValid =false;
        }             
        if(userInfo.email==""){
            emailErr.NoValueFound = "Please Enter a Value";
            isValid =false;
        }
        else if (!(emailRegex.test(userInfo.email))) {
            emailErr.IncorrectFormat = "Incorrect Format";
            isValid =false;
        }
        if(userInfo.pass==""){
            passErr.NoValueFound = "Please Enter a Value";
            isValid =false;
        }
        else if(!(passRegex.test(userInfo.pass))){
            passErr.IncorrectFormat = "Use Minimum eight characters, at least one letter, one number and one special characte";
            isValid =false;
        }       
        setNameErr(nameErr); 
        setEmailErr(emailErr);
        setPassErr(passErr);
        return isValid;

    }

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
  const isValid = formValidation();
     if(isValid){
    const myAPI2 = "https://localhost:44314/api/Users/" + props.User.userID;
    axios.put(myAPI2,userInfo)
      .then((response=>{
        console.log(response);
      }))
    }
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
                            readOnly
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
                           {Object.keys(nameErr).map((key)=>{
                    return <div style={{color:"red"}}>{nameErr[key]}</div>
                  })}
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
                           {Object.keys(emailErr).map((key)=>{
                    return <div style={{color:"red"}}>{emailErr[key]}</div>
                  })}
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
                           {Object.keys(passErr).map((key)=>{
                    return <div style={{color:"red"}}>{passErr[key]}</div>
                  })}
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
export default EditManufacturer;
