import React, { useContext } from 'react';
import style from 'styled-components';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Button from '@mui/material/Button';
import { UseContext } from '../App';


const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };

const Contact = () => {

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
      }

      const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const [userData,setUserData]=useContext(UseContext);
  console.log(userData)
    return (
        <Container>
            <NavDiv style={{
                backgroundImage:`url('https://media.timeout.com/images/105821651/750/422/image.jpg')`,
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                height:"40vw",

            }}>
            <Navigation>
            
                <LeftNav>
                <Link to='/'>
                <i>Trimke <sup style={{
                    backgroundColor:'yellow',
                    color:'black',
                    padding:'0px 5px'
                }}>Free </sup></i> 
                <p>ITALIAN FOOD</p>
                </Link>
                </LeftNav>

                <MiddleNav>
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/login'>LOGIN</Link>
                </MiddleNav>

                <RightNav>
                    <Link to='/bookNow'> <pre>BOOK NOW</pre> </Link>
                </RightNav>

            </Navigation>
            </NavDiv>

            <InformationDiv>
                <InformationSubDiv>
                    <div>
                        <PhoneCallbackIcon sx={{fontSize: '50px',marginLeft:'50px' }}></PhoneCallbackIcon>
                        <h3>1-800-123-1234</h3>
                    <p>
                        You can call us anytime
                    </p>
                    </div>

                    <div>
                    <MapOutlinedIcon sx={{fontSize: '50px',marginLeft:'70px' }}/>
                        <h3>
                            51 Francis Street, San <br />
                            Diego, CA 91702 United <br />
                            States
                        </h3>
                    </div>
                    <div>
                        <SendIcon sx={{fontSize: '50px',marginLeft:'60px' }} ></SendIcon>
                        <h3>
                            Info@demolink.org
                        </h3>
                        <p>
                            Feel free to email us your question
                        </p>
                    </div>
                </InformationSubDiv>
            </InformationDiv>

            <MapDiv style={{
                backgroundImage:`url('/contact/googl_ED.jpg')`,
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',


            }}>

            </MapDiv>

            {/* Sign In Div */}

            <SignInDiv>
                <h1>Get in Touch</h1>

                <Input id="outlined-basic" label="Your Name" variant="outlined"/>

                <Input id="outlined-basic"  label="E-mail" variant="outlined" />

                <Input id="outlined-basic"  label="Phone" variant="outlined"/>

                <Input id="outlined-textarea" label="Massage" multiline/>

                <Button variant="contained" sx={{
                    fontSize:'20px',
                    width:'200px',
                    textAlign:'center',
                    marginTop:'10px'
                }}> Send <SendIcon sx={{
                    fontSize: '30px',
                    marginLeft:'10px',
                    color:'#fff', }}/></Button>
                
            </SignInDiv>


            <TemplateDiv>
                    <TemplateSubDiv>
                        <h1>Get Multipurpose  <b>Monstroid</b><sup>2</sup> Template!</h1> <br />
                        <p>400+ HTML Files <span></span> 21 Niche Templates <span></span> All Source Files <span></span> Regular Updates</p>
                        <br />

                        <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>

    <br />
    <br />
                        

                        <button>VIEW NOW!</button>
                    </TemplateSubDiv>
            </TemplateDiv>


            <LastDiv>
            <LeftNav><i>Trimke <sup style={{
                    backgroundColor:'yellow',
                    color:'black',
                    padding:'0px 5px'
                }}>Free </sup></i> 
                <p>ITALIAN FOOD</p>
                </LeftNav>

                <br />
                <br />


                <LastNavDiv>
                    <Link to='/'>MENU</Link>
                    <Link to='/'>BLOG</Link>
                    <Link to='/contacts'>CONACTS</Link>
                    <Link to='/'>GALLERY</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/login'>Login</Link>
                </LastNavDiv><br />
                <br />
                <IconDiv>
                    <YouTubeIcon sx={{
                        fontSize:'50px',
                        color:'#fff',
                        cursor:'pointer'
                    }}></YouTubeIcon>

                    <FacebookIcon sx={{
                        fontSize:'40px',
                        color:'#fff',
                        cursor:'pointer'
                    }}></FacebookIcon>

                    <TwitterIcon sx={{
                        fontSize:'40px',
                        color:'#fff',
                        cursor:'pointer'
                    }}></TwitterIcon>

                    <InstagramIcon sx={{
                        fontSize:'40px',
                        color:'#fff',
                        cursor:'pointer'
                    }}></InstagramIcon>

                    <PinterestIcon sx={{
                        fontSize:'40px',
                        color:'#fff',
                        cursor:'pointer'
                    }}/>
                </IconDiv>
                <br />
                <p style={{
                    color:'rgb(220, 217, 217)'
                }}>
                    2022 Pesto.All Rights Reserved.Privacy Policy.Design By Muhammad Asif.
                </p>
            </LastDiv>
        </Container>
    );
};

export default Contact;

const Container=style.div``

const NavDiv=style.div`
width:100vw;
z-index:2;
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
    background-color:gray;
    height:70px;
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

a{
    text-decoration:none;
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

const InformationDiv=style.div`
height:60vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
`

const InformationSubDiv=style.div`
display:flex;
justify-content:space-between;
color:rgb(41, 40, 40);
width:800px;
`

const MapDiv=style.div`
background-size:cover;
background-position:center;
height:70vh;
`

/* Sign In Div */

const SignInDiv=style.div`
padding:100px 0px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

/* Input */

const Input=style(TextField)`
width:500px;
padding:10px 0;

@media(max-width:767px){
    width:90vw;
}
`

const TemplateDiv=style.div`
text-align:center;
`

const TemplateSubDiv=style.div`
background-color: rgb(66, 82, 205);
color:white;
padding-bottom:20px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
p{
    span{
        background-color:blue;
        height:10px;
        width:0.2px;
        cursor:pointer;
    }
}
button{
    background-color: rgb(249, 249, 16);
    font-weight:bold;
    border:none;
    padding:10px 15px;
    cursor:pointer;
}
`

const LastDiv=style.div`
padding:50px 0px;
background-color:rgb(62, 61, 61);
display:flex;
flex-direction:column;
align-items:center;
`

const LastNavDiv=style.div`
width:500px;
display:flex;
justify-content:space-evenly;
a{
    text-decoration:none;
    color:white;
}
`

const IconDiv=style.div`
display:flex;
justify-content:space-between;
width:410px;
align-items:center;
`