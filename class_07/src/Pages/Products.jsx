import React, { useContext, useEffect, useState } from 'react'
import { BounceLoader } from 'react-spinners';
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router';
import { ProductsContext } from '../Context/store';
// import { data } from 'react-router';

const Products = () => {

 const [productsData, setProductsData] = useState([])
 const [areProducts, setAreProducts] = useState(true)


 const MyContext = useContext(ProductsContext);

 const { products, updateProducts } = MyContext;

  
  async function getProducts (){
    // console.log(data)
    const url = `https://fakestoreapi.com/products`;
    //  try {
    //   const response = await fetch(url);
    //   const products = await response.json();
    //   setProductsData(products)
    //   // console.log(products)
    //  } catch (error) {
    //   console.log(error)
    //  }
    fetch(url)
    .then(products => products.json())
    .then((data) => {
      // console.log(data)
      updateProducts(data)
      setProductsData(data)
      // console.log(productsData)
    })
    setAreProducts(false)
  }

  useEffect(()=>{
    getProducts()
    // console.log(productsData)
  },[])
  return (
    <>
      <h3>products</h3>
      {areProducts ? (
        <BounceLoader />
      ) : (
        products.map((product, index) => {
          return (
            <li key={index}>
              {" "}
              {product.title}{" "}
              <Link to={`/productDetails/${product.id}`}>
                <FaRegEye />
              </Link>
            </li>
          );
        })
      )}
    </>
  );
}

export default Products