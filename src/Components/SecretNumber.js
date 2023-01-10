import React from 'react';
import style from 'styled-components'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


const SecretNumber = () => {
    return (
        <Container>
            <div style={{
                height:'300px',
                width:'500px',
                backgroundColor:'rgba(239, 236, 236, 0.5)',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
            }}>
            <h1>Please payment ***1587*** on this number <br />
             and we send you a 4 digit code.</h1>
            <TextField id="outlined-basic" label="4 digit no." variant="outlined" sx={{
                            width:'20vw',
                            marginRight:'10px'
                        }} />
                        <Button variant="contained" sx={{
                    fontSize:'20px',
                    width:'200px',
                    textAlign:'center',
                    marginTop:'10px'
                }}> Send <SendIcon sx={{
                    fontSize: '30px',
                    marginLeft:'10px',
                    color:'#fff', }}/></Button>
                    </div>
        </Container>
    );
};

export default SecretNumber;

const Container=style.div`
background-image:url('https://media.istockphoto.com/photos/modern-restaurant-interior-design-picture-id1211547141?k=20&m=1211547141&s=612x612&w=0&h=KiZX3NBZVCK4MlSh4BJ8hZNSJcTIMbNSSV2yusw2NmM=');
background-size:cover;
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;


h1{
    font-size:20px;
}

`