import {TextField } from '@mui/material';
import Button from '@mui/material/Button';
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

  const [getData,setGetData]=useState({email:'',password:''});
  console.log(getData)


  const handleUserData=(even)=>{
    const info={...getData};
    info[even.target.type]=even.target.value;
    setGetData(info)
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
createUserWithEmailAndPassword(auth, getData.email, setGetData.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user.name)
  })
  .catch((error) => {
  });
    }


    if(!newUser){
      const auth = getAuth();
signInWithEmailAndPassword(auth, getData.email, setGetData.password)
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

<LeftNav><i>Trimke <sup style={{
    backgroundColor:'yellow',
    color:'black',
    padding:'0px 5px'
}}>Free </sup></i> 
<p>ITALIAN FOOD</p>
</LeftNav>

<MiddleNav>
<Link to='/'>HOME</Link>
<Link to='/about'>ABOUT</Link>
<Link to='/contacts'>CONTACTS</Link>
</MiddleNav>

<RightNav>
    <Link to='/bookNow'> <pre>BOOK NOW</pre> </Link>
</RightNav>

</Navigation>
    <Container>
      <form onSubmit={handleCreateAccount}>
        <h1>{newUser ? 'Log In' : 'Sign In'}</h1>
        {
          newUser && <Input id="outlined-basic" label="Enter your name" variant="outlined" />
        }
        <br />
        <Input type='email' id="outlined-basic" label="Enter your email" variant="outlined" onBlur={handleUserData} /><br />
        <Input type='password' id="outlined-basic1" label="Enter your password" variant="outlined" onBlur={handleUserData}  />

        
        <Submit type="submit" name="" value='Submit' id="" />

      <SubmitButton variant="contained" onClick={handleGoogleSignIn} ><GoogleIcon ></GoogleIcon>  Sign In With Google</SubmitButton>

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
padding:50px 0 0 0;
form{
  width:550px;
  height:500px;
  border-radius:10px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:white;
  @media(max-width:767px){
    width:80vw;
  }

}
`

const Submit=style.input`
    font-size:25px;
    height:50px;
    width:500px;
    background-color:rgb(9, 138, 9);
    color:white;
    border:none;
    border-radius:5px;
    cursor:pointer;
    margin:10px 0;
    @media(max-width:767px){
      width:70vw;
    }
`

const Input=style(TextField)`
width:500px;
@media(max-width:767px){
  width:70vw;
}
`

const SubmitButton=style(Button)`
  height:50px;
  width:500px;
  margin:50px 0 0 0;
  @media(max-width:767px){
    width:70vw;
  }
`

const Navigation=style.nav`
background-color: rgba(255, 255, 255, 0.1);
width:100vw;
height:100px;
justify-content:space-between;
align-items:center;
display:flex;
position:fixed;
z-index:2;
@media(max-width:1023px){
  background-color:red;
}
@media(max-width:767px){
    height:70px;
    background-color:gray;
}
`;
const RightNav=style.div`
height:20px;
width:100px;
display:flex;
justify-content:center;
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
    margin-left:25px;
}
a:hover{
    color:red;
}

@media(max-width:767px){
    width:70px;
    a{
        padding:0 5px;
    }
}

`;
const MiddleNav=style.div`
display:flex;
justify-content:space-between;
align-items:center;
width:450px;
height:50px;
@media(max-width:600px){
    font-size:10px;
    font-weight:bold;
    width:350px;
}

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

    @media(max-width:600px){
        font-size:10px;
        font-weight:bold;
    }
}
`;
const LeftNav=style.div`
padding-left:40px;
text-align:center;
i{
    font-size:30px;
    cursor:pointer;
    color:white;
    
}
sup{
    font-size:12px;
}
p{
    margin-top:-10px;
    font-size:10px;
    margin-left:-30px;
    cursor:pointer;
    color:white;
}

@media(max-width:767px){
    padding-left:10px;
    i{
        font-size:15px;
    }
    p{
        margin-top:2px;
    }
}
`

