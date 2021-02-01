import axios from "axios";
import React,{useState} from "react";
import {Card,CardHeader,CardBody,CardTitle,CardFooter, Col,Button,Row } from "reactstrap";
import UserProfile from "../CustomComponents/session"
const ProdCard = (props) => {

  const initialValue ={
    userID:"",
    productID:""

  }

  const [order,setOrder] = useState( {...initialValue} );
  
  const onClick = () =>{
    order.productID=props.id;
    order.userID=UserProfile.getUserID();
    axios.post("https://localhost:44314/api/Order",order)
    .then((response=>{console.log(response)}));

  }

  return (
    <>
      <div className="content">
        
        <Col md="6" >
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">{props.prodName}</CardTitle>
                  {/* <p className="card-category">Samsung M30 - 4gb</p> */}
                </CardHeader>
                <CardBody>
                    <img src={props.image} height="180" width="500"></img>
                </CardBody>
                <CardFooter>

                  <hr />
                  <div className="stats">
                    <Row>
                    <Col>
                    <i className="fa fa-inr" />Rs.{props.price}
                    </Col>
                    <Col>
                    <Button onClick={onClick} color="danger"> Order</Button>
                    </Col>
                    </Row>
                  </div>
                  
                </CardFooter>
              </Card>
            </Col>

      </div>
    </>
  );
};

export default ProdCard;
