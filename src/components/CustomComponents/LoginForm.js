import axios from 'axios';
//import Dashboard from 'layouts/Admin';
import React,{useState} from 'react'
import {Modal,ModalBody,ModalHeader,ModalFooter,Form,Row,Col,FormGroup,Input,Button}from "reactstrap";
import Label from 'reactstrap/lib/Label';
import UserProfile from '../CustomComponents/session'
import {
  Route,Redirect
} from "react-router-dom";
import wrongInfo from "../CustomComponents/wrongInfo"

const myAPI = "https://localhost:44314/api/Login";

function LoginForm() {
 
  const initialValue = {
    email:"",
    pass:""
  };
  const initialUserType = "";
  const [modal, setModal] = useState(false);
  const [login,setLogin] = useState( {...initialValue} );
  const [userType,setUserType] = useState(initialUserType);
  const [wrongInfo,setWrongInfo] = useState(false);
  const toggle = () => setModal(!modal);
  const onSubmit = async (e) => {
     e.preventDefault();
     
     
  }
    const onChange = async (e) => {
     setLogin({
       ...login,
       [e.target.name]:e.target.value

     });
  }
    const onClick = (e) =>{
      e.preventDefault();
      axios.post(myAPI,login)
      .then((response=>{
        console.log(response);
        setUserType(response.data.userType);
        UserProfile.setUserID(response.data.userID);
        //console.log(userType);
        setWrongInfo(true)
      }),
      userType =="Admin"||"Manufacturer"||"Dealer"?
      UserProfile.setLoggedInState(true) &&
      UserProfile.setUserType(userType):""
      
      // console.log(UserProfile.getLoggedInState()),
      // console.log(UserProfile.getUserType())
)
      
    }
  
    if(userType=="Admin"){
        return (
      <>
      <div className="content">
         <Redirect to="../admin/dashboard" />
      </div>
      </>
      )
    }
    else if(userType=="Dealer"){
        return (
      <>
      <div className="content">
      {/* {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} */}
       <Redirect to="../dealer/dashboard" />         
      </div>
      </>
      )
    }
    else if(userType=="manufacturer"||userType=="Manufacturer"){
        return (
      <>
      <div className="content">
    
       <Redirect to="../manufacturer/dashboard" />
      </div>
     
      </>
      )
    }
    else{
   return (
      <>
        <div className="content">
           <Button color="danger" onClick={toggle}>Login</Button>
       

          <Modal isOpen={modal} toggle={toggle} >
          <ModalHeader toggle={toggle}>
            Login Form
          </ModalHeader>
          <Form>
           <ModalBody className=" ml-5 mr-5">
             <div >
            <Row>
              <FormGroup>
                <Label>Email</Label>
                <Input type="email" placeholder="Enter Your Email" name="email" value={login.email} onChange={onChange}>
                </Input>
                
              </FormGroup>
            </Row>

            <Row>
              <FormGroup>
                <Label>Password</Label>
                <Input type="password" placeholder="Enter Your Password" name="pass" value={login.pass} onChange={onChange}></Input>
              </FormGroup>
            </Row>
            <Row> 

              {wrongInfo?<p style={{color:"red"}}>Wrong Info Please Check</p>:""}
            
            </Row>
            </div>
            </ModalBody>
            <ModalFooter>
            <Button type="submit" color="primary" onClick={onClick}>Login</Button> 
            </ModalFooter>  
          </Form>
          </Modal>
           

        </div>
        
          </>
    )
    }
}

export default LoginForm
