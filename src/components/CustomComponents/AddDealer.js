
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
  const userType="Dealer";
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  //const [seatno, setSeatno] = useState("");
  const [pass, setPass] = useState("");
  //const [standard, setStandard] = useState("");
  const [nameErr,setNameErr] = useState("");
  const [emailErr,setEmailErr] = useState("");
  const [passErr,setPassErr] = useState(""); 

  let history = useHistory();

  const redirect = () => {
    history.push("/admin/AddDealer");
  };

 const myAPI = "https://localhost:44314/api/Users";
 
  const formValidation = () =>{
        const nameErr = {};
        const emailErr ={};
        const passErr = {};
        let isValid = true;
        var emailRegex = /[^@]+@[a-zA-Z]+\.[a-zA-Z]{2,6}/
        var nameRegex =/[a-zA-Z]{3,20}/
        var passRegex =/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/

        if(name==""){
            nameErr.NoValueFound = "Please Enter a Value";
            isValid =false;
        }       
        else if(!(nameRegex.test(name))){
            nameErr.IncorrectFormat = "Incorrect Format";
            isValid =false;
        }             
        if(email==""){
            emailErr.NoValueFound = "Please Enter a Value";
            isValid =false;
        }
        else if (!(emailRegex.test(email))) {
            emailErr.IncorrectFormat = "Incorrect Format";
            isValid =false;
        }
        if(pass==""){
            passErr.NoValueFound = "Please Enter a Value";
            isValid =false;
        }  
        else if(!(passRegex.test(pass))){
            passErr.IncorrectFormat = "Use Minimum eight characters, at least one letter, one number and one special characte";
            isValid =false;
        }                
        setNameErr(nameErr); 
        setEmailErr(emailErr);
        setPassErr(passErr);
        return isValid;

    }


  function addDealer(newDealer,e) {
     const isValid = formValidation();
     if(isValid){
      setLoading(true);
      axios.post(myAPI,newDealer)
      .then((response=>{
        console.log(response.data);
        //redirect();
        setname("");
        setEmail("");
        setPass("");
        setLoading(false);
        
        
      }))

      
}}

  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Add Dealer</CardTitle>
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
                  {Object.keys(nameErr).map((key)=>{
                    return <div style={{color:"red"}}>{nameErr[key]}</div>
                  })}                  
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
                  {Object.keys(emailErr).map((key)=>{
                    return <div style={{color:"red"}}>{emailErr[key]}</div>
                  })}                  
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
                  {Object.keys(passErr).map((key)=>{
                    return <div style={{color:"red"}}>{passErr[key]}</div>
                  })}
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
                      addDealer({
                        name,
                        email,
                        pass,
                        userType,
                        
                      })
                      
                    }
                  >
                    Add Dealer
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
