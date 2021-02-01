
import React, { useEffect, useState } from "react";

// reactstrap components
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
  Table,
} from "reactstrap";


function ManufacturerDashboard() {
  const [Dealers, setDealers] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  //const [rollno, setRollno] = useState("");
  //const [standard, setStandard] = useState("");

  const ref = firebase.firestore().collection("Dealers");

  function getDealers() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setDealers(items);
    });
  }

  useEffect(() => {
    getDealers();
  });

  function deleteDealer(Dealer) {
    ref
      .doc(Dealer.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  function editDealer(updatedDealer) {
    ref
      .doc(updatedDealer.id)
      .update(updatedDealer)
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <div className="content">
        <Card className="card-user">
          <CardHeader>
            <CardTitle tag="h5">Edit Dealer</CardTitle>
          </CardHeader>
          <CardBody>
            <Form action="/tables">
              <Row>
                <Col className="pr-1 pl-1" md="6">
                  <FormGroup>
                    <label>First Name</label>
                    <Input
                      placeholder="Firstname"
                      type="text"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col className="pl-1 pr-1" md="6">
                  <FormGroup>
                    <label>Last Name</label>
                    <Input
                      placeholder="Last Name"
                      type="text"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                
                <Col className="pl-1 pr-1" md="4">
                  <FormGroup>
                    <label>Phone Number</label>
                    <Input
                      placeholder="Phone Number"
                      type="number"
                      value={Phoneno}
                      onChange={(e) => setPhoneno(e.target.value)}
                    />
                  </FormGroup>
                </Col>

              </Row>
              <Row>
                <Col className="pl-1 pr-1" md="4">
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="radio1"
                        value="Male"
                        onChange={(e) => setGender(e.target.value)}
                      />
                     Male
                    </Label>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="radio"
                        name="radio1"
                        value="Female"
                        onChange={(e) => setGender(e.target.value)}
                      />
                      Female
                    </Label>
                  </FormGroup>
                </Col>
              </Row>
              <Row></Row>
            </Form>
          </CardBody>
        </Card>

        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4" className="text-center">
                  All Dealers Table
                </CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Phone Number</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Gender</th>
                      
                      <th className="text-center">Edit Dealer</th>
                      <th className="text-center">Remove Dealer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Dealers.map((Dealer) => (
                      <tr>
                        <td>{Dealer.Phoneno}</td>
                        <td>{Dealer.firstname}</td>
                        <td>{Dealer.lastname}</td>
                        <td>{Dealer.gender}</td>
                        
                        <td className="text-center">
                          <Button
                            className="btn-round"
                            color="primary"
                            onClick={() =>
                              editDealer({
                                firstname,
                                lastname,
                                Phoneno,
                                
                                gender,
                                
                                id: Dealer.id,
                              })
                            }
                          >
                            Edit
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button
                            className="btn-round"
                            color="danger"
                            onClick={() => deleteDealer(Dealer)}
                          >
                            Remove
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ManufacturerDashboard;
