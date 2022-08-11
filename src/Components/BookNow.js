import React, { useState } from 'react';
import style from 'styled-components';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import {Link} from 'react-router-dom';



const currencies = [
    {
      value: 'B-kash',
      label: 'B-kash',
    },
    {
      value: 'Nogod',
      label: 'Nogod',
    },
    {
      value: 'Upay',
      label: 'Upay',
    },
    {
      value: 'pay-pal',
      label: 'pay-pal',
    },
  ];

const BookNow = () => {
  const[payment,setPayment]=useState('');
  console.log(payment)

  const handlePayment=(even)=>{
    const info=even.target.value;
    setPayment(info)
  }
    return (
        <Container>
            <FormDiv>
                <FormSubDiv>
                        <TopInputDiv style={{
                            marginBottom:'10px'
                        }}>
                        <TextField id="outlined-basic" label="Your name" variant="outlined" sx={{
                            width:'20vw',
                            marginRight:'10px'
                        }} />
                        <TextField id="outlined-basic" label="Booking date" type='number'  placeholder='dd-mm-yyyy' variant="outlined" sx={{
                            width:'20vw',
                        }} />
                        </TopInputDiv>

                        
                        <BottomInputDiv>
                        <TextField id="outlined-basic" label="Person No." variant="outlined" sx={{
                            width:'20vw',
                            marginRight:'10px'
                        }} />
                        <TextField
          id="outlined-select-currency"
          select
          label="Advence payment mathod"
          helperText="Please select payment method"
          sx={{
            width:'20vw',
        }} onBlur={handlePayment}>
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
                        </BottomInputDiv>
                        <Link to='/confirm'>
                        <Button variant="contained" sx={{
                            width:'400px',
                            marginBottom:'10px',
                            fontSize:'20px',
                            display:'flex',
                        }}>Confirmed <ThumbUpAltIcon sx={{
                            fontSize:'30px'
                        }}></ThumbUpAltIcon></Button>
                        </Link>
                </FormSubDiv>
            </FormDiv>
        </Container>
    );
};

export default BookNow;

const Container=style.div`
height:100vh;
width:100vw;
background-image:url('https://xindian.x-grouprestaurant.com/uploads/c9777257aa4e10015b5c692b3c26f9eb.jpg');
background-position:center;
background-size:cover;
`

const FormDiv=style.div`
height:100vh;
    width:100vw;
    background-color:rgba(226, 224, 224, 0.2);
    display:flex;
    justify-content:center;
    align-items:center;
`

const FormSubDiv=style.div`
width:45vw;
background-color:rgb(239, 236, 236);
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:20px 0px;

a{
  text-decoration:none;
}
`
const TopInputDiv=style.div``

const BottomInputDiv=style.div``

const ConfiremDiv=style.div``

