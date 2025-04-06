import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { ProductsContext } from '../Context/store';

const ProductDetails = () => {
  const {id} = useParams()
  const MyContext = useContext(ProductsContext);
  
   const { products, updateProducts } = MyContext;
  console.log(products[id])
  return (
    <div className='container border border-dark my-5 h-100'>
      <div className="row justify-content-between">
        <div className="col-lg-5">
          <img className='img-fluid' src={products[id].image} alt="" />
        </div>
        <div className="col-lg-5 border">
          <h5>{products[id].title}</h5>
          <span>{products[id].price}</span>
          <p>{products[id].description}</p>
        </div>
      </div>

    </div>
  )
}

export default ProductDetails