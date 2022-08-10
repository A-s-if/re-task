import React from 'react';
import style from 'styled-components';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

const Contact = () => {
    return (
        <Container>
            <NavDiv style={{
                backgroundImage:`url('https://media.timeout.com/images/105821651/750/422/image.jpg')`,
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                height:"100vh"

            }}>
            <Navigation>
            
                <LeftNav>
                <Link to='/'>
                <i>Pesto <sup style={{
                    backgroundColor:'yellow',
                    color:'black',
                    padding:'0px 5px'
                }}>Free </sup></i> 
                <p>ITALIAN FOOD</p>
                </Link>
                </LeftNav>

                <MiddleNav>
                <Link to='/home'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/typography'>TYPOGRAPHY</Link>
                <Link to='/task2'>TASK2</Link>
                <Link to='task3'>TASK3</Link>
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
                        <PhoneCallbackIcon></PhoneCallbackIcon>
                        <h3>1-800-123-1234</h3>
                    <p>
                        You can call us anytime
                    </p>
                    </div>
                    <div>
                        <h3>
                            51 Francis Street, San <br />
                            Diego, CA 91702 United <br />
                            States
                        </h3>
                    </div>
                    <div>
                        <SendIcon></SendIcon>
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

            <SignInDiv>
                <h1>Get in Touch</h1>

                <TextField id="outlined-basic" label="Your Name" variant="outlined" sx={{
                    width:'500px',
                }} />
                <br />
                <br />

                <TextField id="outlined-basic"  label="E-mail" variant="outlined" sx={{
                    width:'500px',
                }} />
                <br />
                <br />

                <TextField id="outlined-basic"  label="Phone" variant="outlined" sx={{
                    width:'500px',
                }} />
                <br />
                <br />

                <TextField id="outlined-basic" label="Massage" variant="outlined" sx={{
                    width:'500px',
                }} />
                
            </SignInDiv>


            <TemplateDiv>
                    <TemplateSubDiv>
                        <h1>Get Multipurpose  <b>Monstroid</b><sup>2</sup> Template!</h1> <br />
                        <p>400+ HTML Files <span></span> 21 Niche Templates <span></span> All Source Files <span></span> Regular Updates</p>
                        <br />
                        

                        <button>VIEW NOW!</button>
                    </TemplateSubDiv>
            </TemplateDiv>


            <LastDiv>
            <LeftNav><i>Pesto <sup style={{
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
                </LastNavDiv>
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
height:80vh;
width:100vw;
`;
const Navigation=style.nav`
background-color: rgba(255, 255, 255, 0.1);
width:100vw;
height:100px;
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
    font-weight: bold;
    transition:0.5s;
    :hover{
        background-color:rgb(242, 240, 240);
        border-radius:5px;
    }
}
`;
const LeftNav=style.div`
padding-left:40px;
a{
    text-decoration:none;
}
i{
    font-size:30px;
    cursor:pointer;
    color:black;
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

const SignInDiv=style.div`
padding:100px 0px;
`

const TemplateDiv=style.div`

`

const TemplateSubDiv=style.div`
background-color: rgb(66, 82, 205);
color:white;
padding-bottom:20px;
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