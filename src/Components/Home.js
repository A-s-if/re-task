import React, { useContext } from 'react';
import style from 'styled-components';
import {Link} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
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


const Home = () => {
    
      
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
                backgroundImage:`url('https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/04/20/Pictures/_9487d792-4473-11e8-873d-4d6fb1883171.jpg')`,
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',


            }}>
            <Navigation>

                <LeftNav><i>Pesto <sup style={{
                    backgroundColor:'yellow',
                    color:'black',
                    padding:'0px 5px'
                }}>Free </sup></i> 
                <p>ITALIAN FOOD</p>
                </LeftNav>

                <MiddleNav>
                <Link to='/about'>ABOUT</Link>
                <Link to='/typography'>TYPOGRAPHY</Link>
                <Link to='/contacts'>CONTACTS</Link>
                <Link to='/login'>LOGIN</Link>
                </MiddleNav>

                <RightNav>
                    <Link to='/bookNow'> <pre>BOOK NOW</pre> </Link>
                </RightNav>

            </Navigation>
            </NavDiv>
            <Paper elevation={10}>
                

            <TaskDiv>
            <div><h2>Name</h2>
                <input type="text" name="" placeholder='Your name' id="" style={{
                    textAlign:"center"
                }} /></div>
                <div><h2>Phone</h2>
                <input type="number" name="" placeholder='Your phone number' id="" style={{
                    textAlign:"center"
                }} /></div>
                <div><h2>Date</h2>
                <input type="date" name="" id="" style={{
                    textAlign:"center"
                }} /></div>
                <div><h2>No. Of people</h2>
                <input type="number" name="" placeholder='0'  id="" style={{
                    width:"50px",
                    textAlign:"center"
                }} /></div>
                <div> 
                    <button style={{
  backgroundColor:'rgb(62, 61, 61)',
  color:'white',
  border:'none',
  padding:'5px 10px',
  cursor:'pointer'
                    }}><h4>CHECK AVAILABILITY</h4></button>
                </div>
            </TaskDiv>
            </Paper>


            <AboutDiv>
                <AboutSubDiv>
                    <img src="https://img.pixers.pics/pho(s3:400/FO/52/23/42/33/400_FO52234233_c2878cb7f879208a96cb94274f0c1503.jpg,267,400,jpg)/bath-mats-male-chef-working-in-a-restaurant-kitchen.jpg.jpg" alt="" /> 
                    <div>
                        <h1>About Us</h1><br />
                        <i>Pesto is a family owende and operated Italian Restuarant offering a <br />
                        combination of fresh gredients and othentic Italian cooking <br />
                        <br />
                        We will make sure you are served the most authentic and fresh <br />
                        Italian dishes, while offering the best customer service. Our kitchen <br />
                        is commited to providing our gests with the best Italian Cuisine.</i>
                    </div>
                </AboutSubDiv>
            </AboutDiv>

            <FeaturedOffersDiv>
                <div>
                <h1>Featured Offers</h1>
                <p>We offered the great variety of the best Italian dishes to our visitors and guests.Below are some of <br />
                our most popular dishes and dessert.</p> <br />
                <img src="https://cdn.shopify.com/s/files/1/0523/2862/8391/products/ScreenShot2021-04-20at9.39.10AM_300x.png?v=1626202157" alt="" /><img src="https://www.restaurantsofmanchester.com/photos/image-ig.jpg" alt="" /><img src="https://article.innovadatabase.com/articleimgs/resized_article_images/200/637787824892384385SR%20PB%20main.jpg" alt="" />
                </div>
                
            </FeaturedOffersDiv>

            <RestaurantMenuDiv>
                <RestaurantMenuSubDiv>
                    <h1>Our Restaurant Menu</h1> <br />
                    <br />
                    <div 
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        width:'100vw'
                    }}
                    >
                    <nav>
                        <div>
                        <a href="/">Mains</a> <a href="/">Desserts</a> <a href="/">Drinks</a>
                        </div>

                        

                        
                    </nav>
                    </div>

                    <div style={{
                        display:'flex',
                        justifyContent:'center',
                        backgroundColor:'white',
                        width:'800px',
                        paddingBottom:'50px'
                    }}>
                            <p >
                                <br />
                                <span style={{
                                    color:'green'
                                 }}>$25.89</span>
                                 <br />
                                <br />
                                 <h2>Osso Buco</h2>
                                 <br />
                                 Occo Buco is one of the most Italian greats show cooked veal in a white wine tomato sauce.Meltingly <br />
                                 tender,this is most hearty and luxirious.

                                 <br />
                                 <br />
                                 <span style={{
                                    color:'green'
                                 }}>$16.89</span>
                                  <br />
                                 <br />
                                 <h2>Pupper Delle</h2>
                                 <br />
                                 This delicius dish tops long wide pasta with scallops lobstar,asparagus,butter,sage and <br />
                                  truffle oil to cutter every plate. <br />
                                 <br />
                                 <span style={{
                                    color:'green'
                                 }}>$17.89</span>
                                  <br />
                                 <br />
                                 <h2>Trippa Satriano</h2><br />
                                 <br />
                                 Thinly sliced herb encrusted ahi tuna topped with diced tomatoes,olives,capers,red onions <br />
                                 and fennel.Perfect chioce even for the first time visitors! <br />
                                 <br />
                                 <span style={{
                                    color:'green'
                                 }}>$18.89</span>
                                  <br />
                                 <br />
                                 <h2>Filetto Di Manzo</h2>
                                 <br />
                                 Wonderful combination of prime tenderloin,winter greens,Jerusalem artichok puree and <br />
                                 oxtile reduction sause.

                            </p>
                        </div>
                </RestaurantMenuSubDiv>
            </RestaurantMenuDiv>

            <PictureDiv>
                <img src="https://st3.depositphotos.com/9880800/18500/i/450/depositphotos_185007302-stock-photo-view-stylish-empty-cafe-arranged.jpg" alt="" /><img src="https://images.squarespace-cdn.com/content/v1/5bdfc501266c07394b2a7479/1542522374778-D5FLL2XYIQ11RHM7XNQV/image-asset.jpeg?format=1500w" alt="" /><img src="https://saltwire.imgix.net/B97902692Z.1_20190410120114_000GJONTQEV.1-1.jpg?cs=srgb&fit=crop&h=568&w=847&dpr=1&auto=format%2Ccompress%2Cenhance" alt="" /><br /><img src="https://youreverydayfish.com/wp-content/uploads/2014/02/Whole-pangasius-salad-with-pomegranate-seeds-Your-everyday-fish-350x211.jpg" alt="" style={{
                    width:'660px'
                }} />
            </PictureDiv>

            <NewsDiv>
                <h1>Recent News</h1>
                <br />
                <br />
                <div>
                    <p>
                        <span style={{
                            color:'white',
                            backgroundColor:'black',
                            fontWeight:'bold'
                        }}>July02,2019</span>  <br />
                        <h2>Genuine Italian Pizza: <br />
                        Authenticity and Choice</h2>
                        <br />
                        As an Italian restuarant, we are very proud for our <br />
                         delicious pizzas. Our most popular <br />
                          choice are the Rustica,the Toskana and.....

                    </p>

                    <p>
                    <span style={{
                            color:'white',
                            backgroundColor:'black',
                            fontWeight:'bold'
                        }}>July12,2019</span> <br />
                        <h2>Italian vs American Spaghetti: <br />
                        Top 5 differences</h2>
                        <br />
                        commonly, when we here there is spaghetti for <br />
                        dinner we will be expecting a red tomato sause <br />
                        with meet and seasonings pourd over long.....
                    </p>

                    <p>
                    <span style={{
                            color:'white',
                            backgroundColor:'black',
                            fontWeight:'bold'
                        }}>Aug02,2019</span> <br />
                        <h2>The Delicious History of <br />
                        Lasagna and its Origin</h2>
                        <br />
                        commonly, when we here there is spaghetti for <br />
                        dinner we will be expecting a red tomato sause <br />
                        with meet and seasonings pourd over long.....
                    </p>
                </div>
            </NewsDiv>

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
            <LeftNav><i>Pesto <sup style={{
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
                </LastNavDiv>
                <br />
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
                <p style={{
                    color:'rgb(220, 217, 217)'
                }}>
                    2022 Pesto.All Rights Reserved.Privacy Policy.Design By Muhammad Asif.
                </p>
            </LastDiv>
            
        </Container>
    );
};

export default Home;

const Container=style.div``;
const NavDiv=style.div`
height:100vh;
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
`

const AboutDiv=style.div`
height:70vh;
width:100vw;
background-color: rgb(240, 237, 237);
display:flex;
align-items:center;
margin-top:-77px;
`

const AboutSubDiv=style.div`
color:black;
display:flex;
justify-content:space-evenly;
align-items:center;
width:100vw;
padding-top:50px;
div{
    h1{
        font-size:40px;
    }


}

img{
    height:385px;
    
}

`

const FeaturedOffersDiv=style.div`
height:100vh;
width:100vw;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
background-color:white;
div{
    height:400px;
}
h1{
    font-size:35px;
}
img{
    height:280px;
    margin:0px 10px;

}
`

const RestaurantMenuDiv=style.div``

const RestaurantMenuSubDiv=style.div`
display:flex;
flex-wrap:wrap;
text-align:center;
justify-content:center;
padding:100px 0px;
width:100vw;

background-color: rgb(240, 237, 237);
nav{
    background-color:rgb(21, 20, 20);
    width:800px;
    height:80px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:8px 8px 0px 0px;
    margin-top:50px;
    div{
        width:400px;
        display:flex;
        justify-content:space-between;
    }
    a{
        text-decoration:none;
        color:white;
        font-weight: bold;
        }

        
}

`

const PictureDiv=style.div`
width:100vw;
display:flex;
flex-wrap:wrap;
img{
    width:455px;
}
`

const NewsDiv=style.div`
padding-top:150px;
height:70vh;
div{
    display:flex;
    justify-content:space-evenly;
    width:100vw;
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

const TaskDiv=style.div`
width:900px;
display:flex;
display: flex;
justify-content: space-around;
align-items: center;
height: 150px;
position: absolute;
background-color:white;
top:450px;
left:220px;
box-shadow:10px 10px 5px  rgb(202, 199, 199);
inp{
    text-align:center;
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