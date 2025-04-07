import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../Utils/Config'
import { Button, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { UsersContext } from '../UsersContext/context';
import Loader from '../Component/Loader';

const Users = () => {

  const [areUser, setAreUsers] = useState(true)
  const { users, updateUsers } = useContext(UsersContext);
  // console.log(users)

  const getUsersData = async () =>{
    const response = await getUsers()
    updateUsers(response.data)
    console.log(users)
    setAreUsers(false)
  }

  const diffenciate = (role) =>{
    const userRole = {
      Manager: "Manager",
      Developer: "Developer"
    };
    if(userRole[role] === "Manager"){
    console.log(1);

      return (
        <Button color="success" variant="outlined">
          {userRole[role]}
        </Button>
      );
    } else if(userRole[role] === "Developer"){
    console.log(2);

      return (
        <Button color="primary" variant="outlined">
          {userRole[role]}
        </Button>
      );
    }
  }

  useEffect(()=>{
    getUsersData();
  },[])

  return (
    <>
      <Container>
        {areUser ? (
          <Loader />
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => {
                  return (
                    
                      <TableRow key={ index }>
                        <TableCell>{index}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{diffenciate(user.role)}</TableCell>
                        <TableCell><Typography variant='span'>some action</Typography></TableCell>
                      </TableRow>
                   
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
}

export default Users