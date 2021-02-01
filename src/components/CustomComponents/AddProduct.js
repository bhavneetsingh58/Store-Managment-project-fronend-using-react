
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


  
function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [name, setname] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [photo,setPhoto] = useState("");
  const [priceErr,setPriceErr] = useState({});
  const [quantityErr,setQuantityErr] = useState({});
  const [nameErr,setNameErr] = useState({});
  const [photoErr,setPhotoErr] = useState({});

  let history = useHistory();


    const initialValue = {
      name:"",
      price:"",
      quantity:"",
      photo:""
    }



 const myAPI = "https://localhost:44314/api/Product";
     
    const onChange = () =>{

    }


    const convertBase64 = (file) =>{
      return new Promise((resolve,reject) =>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () =>(
          resolve(fileReader.result)
     
        );
          
        fileReader.onerror =  ((error)=>{
          reject(error)
        })

      });
    }
    const uploadImage = async (e) =>{
      const file = e.target.files[0];
      console.log(file);
      const  base64 = await convertBase64(file);
      setPhoto(base64);
      console.log(photo);

    }




      const formValidation = () => {
        const priceErr = {} ;
        const quantityErr = {};
        const nameErr ={};
        const photoErr ={};
        let isValid = true;
        
        if(name==""){
            nameErr.NoValueFound = "Please Enter a Non-zero Positive Value";
            isValid =false;
        }

        if(price<0){
            priceErr.NegitiveValue = "Negitive Value not Allowed";
            isValid =false;
        }
        if(price>99999){
             priceErr.tooBig = "Max price of product can be 99999 ";
             isValid =false;
        }
        if(price==0){
            priceErr.NoValueFound = "Please Enter a Non-zero Positive Value";
            isValid =false;
        }

        if(quantity<0){
            quantityErr.NegitiveValue = "Negitive Value not Allowed";
            isValid =false;
        }
        if(quantity>10){
             quantityErr.tooBig = "Max Quantity of product can be 10 ";
             isValid =false;
        }
        if(quantity==0){
             quantityErr.NoValueFound ="Please Enter a Non-zero Positive Value";
             isValid =false;
        }

         if(photo==""){
            photoErr.NoValueFound = "Please Select a photo";
            isValid =false;
        }
        setNameErr(nameErr);
        setPriceErr(priceErr);
        setQuantityErr(quantityErr);
        setPhotoErr(photoErr);
        return isValid;

      }
      
  function addProduct(newProduct,e) {
     const isValid = formValidation();
     if(isValid){
      setLoading(true);
      axios.post(myAPI,newProduct)
      .then((response=>{
        console.log(response.data);
          setname("");
          setPrice(0);
          setQuantity(0);   
          setPhoto("");     
      }))
     }


  }

  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Add Products</CardTitle>
          </CardHeader>
          <CardBody>

            <Form>

              <Row>
                <Col className="pr-1 pl-1" md="6">
                  <FormGroup>
                    <label>Name</label>
                    <Input
                      required
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
                    <label>price</label>
                    <Input
                      required
                      placeholder="price"
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </FormGroup>
                  {Object.keys(priceErr).map((key)=>{
                    return <div style={{color:"red"}}>{priceErr[key]}</div>
                  })}
                </Col>
              </Row>
              <Row>
                <Col className="pl-1 pr-1" md="6">
                  <FormGroup>
                    <label>Quantity</label>
                    <Input
                      required
                      placeholder="Quantity"
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </FormGroup>
                   {Object.keys(quantityErr).map((key)=>{
                    return <div style={{color:"red"}}>{quantityErr[key]}</div>
                  })}
                </Col>

                <Col className="pl-1 pr-1" md="6">
                  <FormGroup>
                    <label>Input</label>
                    <Input
                      required
                      placeholder="file"
                      type="file"
                      //value={initialValue.photo}
                      //onChange={(e) => setImage(e.target.value)}
                      onChange = {(e) => {uploadImage(e);}}
                    />
                  </FormGroup>
                  {Object.keys(photoErr).map((key)=>{
                    return <div style={{color:"red"}}>{photoErr[key]}</div>
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
                      addProduct({
                        name,
                        price,
                        quantity,
                        photo
                        
                      })
                      
                    }
                  >
                    Add Products
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

export default AddProduct;
