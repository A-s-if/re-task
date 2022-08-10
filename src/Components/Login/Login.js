import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import style from 'styled-components';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {

  const[newUser,setNewUser]=useState(false);

  const [userData,setUserData]=useState({
    email:'',
    password:''
  })

  console.log(userData)

  const handleUserData=(even)=>{
    const info={...userData};
    info[even.target.type]=even.target.value;
    setUserData(info)
  }
  return (
    <Container>
      <form action="">
        <h1>Log In</h1>
        {
          newUser && <TextField id="outlined-basic" label="Enter your name" variant="outlined" sx={{
            width:'500px',
            marginBottom:'10px'
          }} />
        }
        <br />
        <TextField type='email' id="outlined-basic" label="Enter your email" variant="outlined" onBlur={handleUserData} sx={{
          width:'500px',
          marginBottom:'10px'
        }} /><br />
        <TextField type='password' id="outlined-basic" label="Enter your password" variant="outlined" onBlur={handleUserData} sx={{
          width:'500px',
          marginBottom:'10px'
        }} />

        
        <input type="submit" name="" value='Submit' id="" style={{
          fontSize:'25px',
          height:'50px',
          width:'500px',
          backgroundColor:'rgb(9, 138, 9)',
          color:'white',
          border:'none',
          borderRadius:'5px',
          cursor:'pointer',
          marginBottom:'10px'
        }} />

      <Button variant="contained" sx={{
        height:'50px',
        width:'500px',
        fontSize:'20px'
      }}><GoogleIcon fontSize='large'></GoogleIcon>  Sign In With Google</Button>

      <p>{newUser ? 'Already have an' : 'You have no'} account? Please <u onClick={()=> setNewUser(!newUser)} style={{
          cursor:'pointer'
        }} >{newUser ? 'Sign In' : 'Log In'}</u> </p>
      </form>
    </Container>
  );
};

export default Login;

const Container=style.div`
background-color:rgb(240, 239, 239);
height:100vh;
display:flex;
justify-content:center;
align-items:center;
form{
  width:550px;
  height:500px;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:white;
}
`

