
import React from "react";
import m30 from "../assets/img/m30.webp"
import LoginForm from "../components/CustomComponents/LoginForm"
import UserProfile from "../components/CustomComponents/session"
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Jumbotron,Button,
  Toast,ToastHeader,ToastBody
} from "reactstrap";
// // core components
// import {
//   dashboard24HoursPerformanceChart,
//   dashboardEmailStatisticsChart,
//   dashboardNASDAQChart,
// } from "variables/charts.js";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">

          <Jumbotron>
              <h1>Singh Store Management System</h1>
              <p>
                Are You A Manufacturer looking for a tool to handle your dealers,
                Look no further for You have come to the right place <br/><br/>
              
                New Here ?    Contact Us @ bhavneetsachdev58@gmail.com  <br/><br/>
                
                Returning Customer ? Welcome Back!!!, <br/><br/>
                Hope You're Enjoying Our Tool .
                
              </p>
              
              <p>
                {UserProfile.getLoggedInState()?"":<LoginForm></LoginForm>}
             
              </p>
            </Jumbotron>
        

      <div>
      <Row>
      <Col  md="4">
      <div className="p-3 my-2 rounded bg-docs-transparent-grid">
        <Toast
              style={{
                maxWidth: "330px",
              }}
            >
          <ToastHeader>
            Admin
          </ToastHeader>
          <ToastBody>
            Admins Can Add and Manage Multiple Manufacturer
          </ToastBody>
        </Toast>
      </div>
     </Col>

    <Col  md="4">
      <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                    <Toast
              style={{
                maxWidth: "330px",
              }}
            >
          <ToastHeader>
           Manufacturer
          </ToastHeader>
          <ToastBody>
           Manufacturer can Add/Manage Dealers and Products 
          </ToastBody>
        </Toast>
      </div>
     </Col>

       <Col  md="4">
      <div className="p-3 my-2 rounded bg-docs-transparent-grid">
                    <Toast
              style={{
                maxWidth: "330px",
               
              }}
            >
          <ToastHeader>
            Dealer
          </ToastHeader>
          <ToastBody>
            Dealers can Place
            <br/>/Manage Orders 
            <br/>
          </ToastBody>
        </Toast>
      </div>
     </Col>      
     
     </Row>
     </div>


</div>
      </>
    );
  }
}

export default Dashboard;
