import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router";
const ProductDetails = () =>{

  const {id} = useParams()
  const [data,setData] = useState({})
    const getProducts = async () =>{
        const url = `https://fakestoreapi.com/products/${id}`;
  
        const response = await fetch(url)
        const responseJson = await response.json()
        setData(responseJson)
        console.log(responseJson)
  
    }
  
    useEffect(()=>{
      getProducts()
    },[])

  // console.log(imgUrl);
  return (
    <>
      <Card 
        className="electronics_card"
         style={{ border : "none",width : "95%",backgroundColor : "transparent" }}
      >
        <div className="img_container d-flex justify-content-center">
          <Card.Img variant="top"  height={200} src={data.image} style={{width : "200px"}} />
        </div>

        <Card.Body className="border-none text-center px-0 pb-0 lead">
          <Card.Title style={{ fontSize: ".83rem" }}>{data.title ? data.title : ""}</Card.Title>
          <Card.Text></Card.Text>

          <Button variant="success">buy now</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductDetails;