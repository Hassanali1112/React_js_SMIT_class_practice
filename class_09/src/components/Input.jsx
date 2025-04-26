const Input = ({ data }) => {
  console.log(data);
  return (
    <input
      type={data.type}
      value={data.value}
      onChange={(e) => {
        data.update(e.target.value)
      }}
      placeholder={data.placeHolder}
    ></input>
  );
};

export default Input;
