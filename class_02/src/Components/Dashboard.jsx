import Profile from "./Profile";

const Dashboard = ({name,email}) =>{

  return (
    <>
      <Profile name={name} email={email} />
    </>
  );
}

export default Dashboard;