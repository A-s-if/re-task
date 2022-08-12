import { Button, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import style from 'styled-components';
import GoogleIcon from '@mui/icons-material/Google';
import { useContext } from 'react';
import { UseContext } from '../../App';
import { useState } from 'react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './Config';
import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const app = initializeApp(firebaseConfig);

  const [userData,setUserData]=useContext(UseContext);

  const[newUser,setNewUser]=useState(false);

 


  const handleUserData=(even)=>{
    const info={...userData};
    info[even.target.type]=even.target.value;
    setUserData(info)
  }

  /* google sign in */

  const handleGoogleSignIn=()=>{
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
    setUserData(user)
  }).catch((error) => {
    console.log(error)
  });
  }

  /* create new account or sign in */

  const handleCreateAccount=(e)=>{
    e.preventDefault()
    if(newUser ){
      const auth = getAuth();
createUserWithEmailAndPassword(auth, userData.email, userData.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
  });
    }


    if(!newUser){
      const auth = getAuth();
signInWithEmailAndPassword(auth, userData.email, userData.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    console.log(error)
  });
    }
  }
  return (
    <div>
      <Navigation>

<LeftNav><i>Pesto <sup style={{
    backgroundColor:'yellow',
    color:'black',
    padding:'0px 5px'
}}>Free </sup></i> 
<p>ITALIAN FOOD</p>
</LeftNav>

<MiddleNav>
<Link to='/'>HOME</Link>
<Link to='/about'>ABOUT</Link>
<Link to='/typography'>TYPOGRAPHY</Link>
<Link to='/contacts'>CONTACTS</Link>
<Link to='/login'>LOGIN</Link>
</MiddleNav>

<RightNav>
    <Link to='/bookNow'> <pre>BOOK NOW</pre> </Link>
</RightNav>

</Navigation>
    <Container>
      <form onSubmit={handleCreateAccount}>
        <h1>{newUser ? 'Log In' : 'Sign In'}</h1>
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
        <TextField type='password' id="outlined-basic1" label="Enter your password" variant="outlined" onBlur={handleUserData} sx={{
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

      <Button variant="contained" onClick={handleGoogleSignIn} sx={{
        height:'50px',
        width:'500px',
        fontSize:'20px'
      }}><GoogleIcon fontSize='large'></GoogleIcon>  Sign In With Google</Button>

      <p>{newUser ? 'Already have an' : 'You have no'} account? Please <u onClick={()=> setNewUser(!newUser)} style={{
          cursor:'pointer'
        }} >{newUser ? 'Sign In' : 'Log In'}</u> </p>
      </form>
    </Container>
    </div>
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

const Navigation=style.nav`
background-color: rgba(255, 255, 255, 0.1);
width:100vw;
height:80px;
justify-content:space-between;
align-items:center;
display:flex;
position:fixed;
`;
const RightNav=style.div`
height:10px;
width:100px;
display:flex;
align-items:center;
padding-right:40px;
color:black;
a{
    text-decoration:none;
    color:black;
    font-size:13px;
    padding:0px 20px;
    background-color:white;
    height:20px;
    display:flex;
    align-items:center;
}
a:hover{
    color:red;
}
`;
const MiddleNav=style.div`
display:flex;
justify-content:space-between;
align-items:center;
width:450px;
height:50px;

a{
    text-decoration:none;
    color:black;
    font-size:13px;
    padding:3px 5px;
    font-weight:bold;
    transition:0.5s;
    :hover{
        background-color:rgb(242, 240, 240);
        border-radius:5px;
    }
}
`;
const LeftNav=style.div`
padding-left:40px;
text-align:center;
color:black;
i{
    font-size:30px;
    cursor:pointer;
}
sup{
    font-size:12px;
}
p{
    margin-top:-10px;
    font-size:10px;
    margin-left:-38px;
    cursor:pointer;
    color:black;
}
`

