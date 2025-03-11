import Dashboard from "./Dashboard";


const User = ({name,email}) => {
  console.log(name,email);
  return <>
  <Dashboard name={name} email={email} />
  </>;
};

export default User;
