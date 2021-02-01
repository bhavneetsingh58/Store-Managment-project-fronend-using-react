import React,{useState} from 'react'
import {Modal,ModalBody,ModalHeader,ModalFooter,Form,Row,Col,FormGroup,Input,Button}from "reactstrap";
import Label from 'reactstrap/lib/Label';

function LoginForm() {
  const initialValue = {
    email:"",
    password:""
  };
  const [modal, setModal] = useState(false);
  const [login,setLogin] = useState( {...initialValue} );
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
                <Input type="password" placeholder="Enter Your Password" name="password" value={login.password} onChange={onChange}></Input>
              </FormGroup>
            </Row>
            </div>
            </ModalBody>
            <ModalFooter>
            <Button type="submit" color="primary" onCLick={toggle}>Login</Button> 
            </ModalFooter>
          </Form>
         
          
          </Modal>
           

        </div>
          
          </>
    )
}

export default LoginForm
