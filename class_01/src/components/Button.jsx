function Button ({text,alert }) {

  return (
    <>
    <button onClick={alert}>{text}</button>
    </>
  )
}

export default Button;