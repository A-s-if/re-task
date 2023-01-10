import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import style from 'styled-components';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import { UseContext } from '../App';
import { getAuth, signOut } from "firebase/auth";


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

const About = () => {
    function getLabelText(value) {
        return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
      }

      const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  
  const [userData,setUserData]=useContext(UseContext);
  console.log(userData)




    return (
        <Container>

            {/* Nav div */}
            <NavDiv style={{
                backgroundImage:`url('https://xindian.x-grouprestaurant.com/uploads/cfff96d7e822bdcec261ff181b0b02df.jpg')`,
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                height:'60vw',

            }}>

                {/* Navigation */}

            <Navigation>

                {/* Left Nav */}

                <LeftNav><i>Trimke <sup style={{
                    backgroundColor:'yellow',
                    color:'black',
                    padding:'0px 5px'
                }}>Free </sup></i> 
                <p>ITALIAN FOOD</p>
                </LeftNav>

                {/* Middle Nav */}

                <MiddleNav>
                <Link to='/'>HOME</Link>
                <Link to='/contacts'>CONTACTS</Link>
                <Link to='/login'>LOGIN</Link>
                
                </MiddleNav>

                {/* Right Nav */}

                <RightNav>
                    <Link to='/bookNow'> <pre>BOOK NOW</pre> </Link>
                </RightNav>

            </Navigation>
            </NavDiv>

            {/* About Restuarant Div */}

            <AboutRestuarantDiv>

            {/* About Restuarant Sub Div */}

                <AboutRestuarantSubDiv>
                    <img loading='eager' src="https://cdn.create.vista.com/api/media/medium/185007706/stock-photo-view-stylish-empty-cafe-arranged?token=" alt="" />
                    
                    <div>
                    <h1>About Our Restuarant</h1>
                    <h2>We offered the best italian dishes in a <br />
                    friendly and calm atmosphere </h2>
                    <br />

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aspernatur enim <br /> perspiciatis fugit, a officiis amet accusamus quam, commodi dicta doloremque molestiae, <br /> beatae porro! Exercitationem repellat ipsa sunt unde est.</p>
                    <br />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet recusandae, voluptates <br /> expedita voluptas neque cumque suscipit exercitationem! Doloremque magni alias repellendus architecto <br /> eveniet asperiores, fugiat  corporis aliquid adipisci reprehenderit cum qui delectus assumenda <br /> molestiae obcaecati aut modi, officia repellat aperiam.  Cumque ea veritatis animi doloremque.
                    </p>
                    </div>
                </AboutRestuarantSubDiv>
            </AboutRestuarantDiv>

            {/* Opurtunaty Div */}
                
            <OpurtunatyDiv>
                <h1>Why People Choose Us</h1>

                {/* Opurtunaty Sub Div */}

                <OpurtunatySubDiv>
                    <div> <FastfoodIcon sx={{
                        fontSize:'40px'
                    }}></FastfoodIcon> <h1>Friedly Team</h1> 
                    <p>Morbi tristique senectus et netus et <br />
                    malesuada fames ac turpis.</p> </div>

                    <div><DinnerDiningIcon sx={{
                        fontSize:'40px'
                    }}></DinnerDiningIcon><h1>Fresh Food</h1>
                    <p>
                    Cun conculium accelerare,omnes <br />
                             absolutioes quaestio fatalis.</p></div>

                    <div>
                        <LocalDiningIcon sx={{
                        fontSize:'40px'
                    }}></LocalDiningIcon>
                        <h1>Quality Cuisine</h1>
                        <p>
                            Cun conculium accelerare,omnes <br />
                             absolutioes quaestio fatalis.
                        </p>
                    </div>

                    <div>
                        <RestaurantIcon sx={{
                        fontSize:'40px'
                    }}></RestaurantIcon>
                        <h1>
                            Best Service
                        </h1>
                        <p>
                    Cun conculium accelerare,omnes <br />
                             absolutioes quaestio fatalis.</p>
                    </div>

                    <div>
                        <RestaurantMenuIcon sx={{
                        fontSize:'40px'
                    }}></RestaurantMenuIcon>
                        <h1>
                            Diverse Menu
                        </h1>
                        <p>
                            Cun conculium accelerare,omnes <br />
                             absolutioes quaestio fatalis.
                        </p>
                    </div>
                    
                    <div>
                        <SoupKitchenIcon sx={{
                        fontSize:'40px'
                    }}></SoupKitchenIcon>
                        <h1>
                            Affordable Prices
                        </h1>
                        <p>Morbi tristique senectus et netus et <br />
                    malesuada fames ac turpis.</p>
                    </div>
                </OpurtunatySubDiv>
            </OpurtunatyDiv>

            {/* Testimonial Div */}

            <TestimonialDiv>

                {/* Testimonial Sub Div */}

                <TestimonialSubDiv>
                    <h1>Testimonials</h1>
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, <br /> ipsum cupiditate ullam similique, magnam fugiat minima corrupti <br /> sequi assumenda dolore molestias consequatur blanditiis modi <br /> sit voluptatem cum. Minus, sequi rem.
                    </p>
                </TestimonialSubDiv>
            </TestimonialDiv>

            {/* Award Div */}

            <AwardDiv>
                <h1>Our Awards</h1>
                <br />
                <br />
                <br />

                {/* Award Sub Div */}

                <AwardSubDiv>
                    <div>
                        <h3>
                            R I C K <br />
                            M E Y E R S
                        </h3>
                    </div>
                    <div>
                        <h3>B R E D S</h3>
                        <p>A D S V E R T I S I N G</p>
                    </div>
                    <div>
                        <h3>
                            N E U T O N
                        </h3>
                        <p>I N T E R A C T I V E</p>
                    </div>
                    <div>
                        <h3>F R A N C O I S <br />
                        R A D E B L A D E</h3>
                    </div>
                </AwardSubDiv>
            </AwardDiv>


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

                {/* Left Nav */}
                
            <LeftNav><i>Trimke <sup style={{
                    backgroundColor:'yellow',
                    color:'black',
                    padding:'0px 5px'
                }}>Free </sup></i> 
                <p>ITALIAN FOOD</p>
                </LeftNav>

                <br />
                <br />
                <br />
                <br />


                <LastNavDiv>
                    <Link to='/'>MENU</Link>
                    <Link to='/'>BLOG</Link>
                    <Link to='/contacts'>CONACTS</Link>
                    <Link to='/'>GALLERY</Link>
                    <Link to='/about'>ABOUT</Link>
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
                <br />
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

export default About;

const Container=style.div``

/* Nav Div */

const NavDiv=style.div`
height:80vh;
width:100vw;
`;

/* Navigation */

const Navigation=style.nav`
background-color: rgba(255, 255, 255, 0.1);
width:100vw;
height:100px;
justify-content:space-between;
align-items:center;
display:flex;
position:fixed;
@media(max-width:1023px){
    background-color:red;
}
@media(max-width:767px){
    background-color:gray;
    height:70px;
}
`;

/* Right Nav */

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

/* Middle Nav */

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

/* Left Nav */

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

/* About Restuarant Div */

const AboutRestuarantDiv=style.div`
width:100vw;
background-color: rgb(237, 237, 237);
padding:50px 0;
display:flex;
justify-content:center;
align-items:center;
`

/* About Restuarant Sub Div */

const AboutRestuarantSubDiv=style.div`
display:flex;
justify-content:space-between;
width:1200px;
img{
    height:400px;
    width:400px;
    margin:0 20px 0 0;
}


@media(max-width:1023px){
    flex-direction:column;
    align-items:center;
    div{
        text-align:center;
    }
}

`

/* Opurtunaty Div */

const OpurtunatyDiv=style.div`
width:100vw;
display:flex;
margin:0 0 10px 0;
flex-direction: column;
justify-content:center;
align-items:center;
h1{
    font-size:40px;
}
@media(max-width:1023px){
    flex-direction:column;
    align-items:center;
    div{
        h1{
            font-size:30px;
        }

        h2{
            font-size:20px;
        }
    }
        
    }

    @media(max-width:767px){
    h1{
        font-size:30px;
    }
    }


`

/* Opurtunaty Sub Div */

const OpurtunatySubDiv=style.div`
width:800px;
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;
div{
    border:2px solid rgba(86, 84, 84, 0.5);
    width:200px;
    margin:10px 0 0 0;
}
h1{
    font-size:30px;
}
@media(max-width:1023px){
    width:100vw;
    div{
        width:30vw;
        h1{
            font-size:25px;
        }
    }
    
}

@media(max-width:767px){
    div{

        width:250px;
        h1{
            font-size:30px;
        }
    }
}
`

/* Testimonial Div */

const TestimonialDiv=style.div`
height:70vh;
background-image:url('/about/images (1).jfif');
color:white;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
`

/* Testimonial Sub Div */

const TestimonialSubDiv=style.div`
p{
    font-size:20px;
}

@media(width:767)
`

/* Award Div */

const AwardDiv=style.div`
height:60vh;
width:100vw;
background-color: white;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

/* AwardSubDiv */

const AwardSubDiv=style.div`
width:900px;
display:flex;
justify-content:space-evenly;

div{
    width:160px;
}

@media(max-width:1023px){
    width:766px;
}

@media(max-width:767px){
    width:100vw;
    flex-wrap:wrap;
}
`

/* Template Div */

const TemplateDiv=style.div`
text-align:center;
`

/* Template Sub Div */

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

/* Last Div */

const LastDiv=style.div`
padding:50px 0px;
background-color:rgb(62, 61, 61);
text-align:center;
display:flex;
flex-direction:column;
align-items:center;
`

/* Last Nav Div */

const LastNavDiv=style.div`
width:500px;
display:flex;
justify-content:space-evenly;
a{
    text-decoration:none;
    color:white;
}
@media(max-width:767px){
    width:100vw;
}
`

/* Icon Div */

const IconDiv=style.div`
display:flex;
justify-content:space-between;
width:410px;
align-items:center;
@media(max-width:767px){
    width:100vw;
}
`