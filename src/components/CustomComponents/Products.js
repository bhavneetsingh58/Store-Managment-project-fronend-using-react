import React, { useState, useEffect } from "react";
import axios from "axios";
import ProdCard from './ProdCard'
import {Row,Col} from 'reactstrap'
import m30 from "../../assets/img/m30.webp";

const myAPI = "https://localhost:44314/api/Product";

function Products() {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    getData();
  },[]);
  
  const getData = () => {
    axios.get(myAPI).then((response) => {
      setMyData(response.data);
      console.log(response.data);
    });
  };

  return (
    <div className="content">
        <Row>
            {myData.map((Product) => (                 
                <ProdCard prodName={Product.name} image={Product.photo} price={Product.price}  id={Product.prodID}></ProdCard> 
             ))}
        </Row>    
    </div>
  );
}

export default Products;
