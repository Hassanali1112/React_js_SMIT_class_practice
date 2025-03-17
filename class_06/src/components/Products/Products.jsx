import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import BrandCard from "../BrandCard/BrandCard";
import { Link, useParams } from "react-router";


const Products = () =>{
 
  const [data,setData] = useState([])
  const getProducts = async () =>{
      const url = "https://fakestoreapi.com/products";

      const response = await fetch(url)
      const responseJson = await response.json()
      setData(responseJson)

  }

  useEffect(()=>{
    getProducts()
  },[])
  return(


    <>
    <div className="container  my-4 px-3">
          <div
            className="parent p-0"
            style={{ borderRadius: "10px", background: "#FFFFFF" }}
          >
            {
              <Row className="p-4 px-5 pb-0 justify-content-between row-gap-3">
                {data.map((item, index) => {
                  return (
                    <Col
                      md={2}
                      key={index}
                      className="p-0 d-flex justify-content-center"
                    >
                      <BrandCard title={item.title} imgUrl={item.image} />
                      <Link to={`/products/${item.id}`}>view product</Link>
                    </Col>
                  );
                })}
              </Row>
            }
          </div>
        </div>
    
    
    </>
  )
}

export default Products;