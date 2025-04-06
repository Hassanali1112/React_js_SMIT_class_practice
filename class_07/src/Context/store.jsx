import React, {  createContext, useState } from 'react'


export const  ProductsContext = createContext()

const Store = ({children}) => {

  const [products, setProducts] = useState([]);


  const storeData = {
    products : products,
    updateProducts : data => setProducts(data)
  }
  

  return (
    <ProductsContext.Provider value={storeData}>
      {children}
    </ProductsContext.Provider>
  )
}

export default Store;