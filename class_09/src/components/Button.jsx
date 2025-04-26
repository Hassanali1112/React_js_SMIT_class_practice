import React from 'react'

const Button = ({ func ,text}) => {
  return <button onClick={()=>{func(4)}}>{text}</button>;
};

export default Button