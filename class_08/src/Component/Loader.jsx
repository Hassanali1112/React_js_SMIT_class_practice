import React from 'react'
import "./loader.css"
import { GridLoader } from 'react-spinners';

const Loader = () => {
  return (
    <div className="loader">
      <GridLoader color='green' />
    </div>
  );
}

export default Loader