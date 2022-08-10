import React from 'react';
import style from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { TextField } from '@mui/material';


const Task3 = () => {
    return (
        <Container>
            <NavDiv>
                <p>logo</p>
                <MenuIcon sx={{
                fontSize:'large',
                marginRight:'40px',
                cursor:'pointer'
            }}></MenuIcon>
            </NavDiv>

            <FirstDiv>
                <img src="/task3/Capture.PNG" alt="" />
            </FirstDiv>

            <SecoudDiv>
                <SecoundSubDiv1>
                    <div>
                        <img src="/task3/Capture1.PNG" alt="" />
                        <h1>
                            TAXI COMPANY
                        </h1>

                        <p>
                            Lorem ipsum dolor, sit amet <br />
                            consectetur adipisicing elit. <br />
                            Possimus, tempore impedit. Harum <br />
                             quae odio consequuntur.
                        </p>

                        <button>LEARN MORE</button>
                    </div>
                    <div>
                        <img src="/task3/Capture2.PNG" alt="" />
                        <h1>
                            APPLICATION
                        </h1>

                        <p>
                            Lorem ipsum dolor, sit amet <br />
                            consectetur adipisicing elit. <br />
                            Possimus, tempore impedit. Harum <br />
                             quae odio consequuntur.
                        </p>

                        <button>LEARN MORE</button>
                    </div>
                    <div>
                        <img src="/task3/Capture3.PNG" alt="" />
                        <h1>
                            TAXI SERVICES
                        </h1>

                        <p>
                            Lorem ipsum dolor, sit amet <br />
                            consectetur adipisicing elit. <br />
                            Possimus, tempore impedit. Harum <br />
                             quae odio consequuntur.
                        </p>

                        <button>LEARN MORE</button>
                    </div>
                </SecoundSubDiv1>

                <SecoundSubDiv2>


                    <div style={{
                        display:'flex',
                        justifyContent:'space-between',
                        width:'800px',
                        marginTop:'20px'
                    }}>
                        <div>
                            <img src="/task3/Capture4.PNG" alt="" /> <br />
                            <br />
                            Lorem ipsum dolor sit, amet consectetur <br />
                            adipisicing elit. Quod, numquam. Distinctio <br />
                            sunt, nihil, tempora possimus laborum autem <br />
                            quam, qui debitis similique officia dolore ad <br />
                            rerum quidem ipsa unde repellendus repudiandae.
                        </div>

                        <div style={{
                            width:'350px',
                            height:'200px',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center',
                            alignItems:'center'
                        }}>
                            <h1>
                                Taxi <br />
                                transfers from and to <br />
                                Airport.
                            </h1>

                            <div style={{
                                height:'40px',
                                width:'320px',
                                backgroundColor:'rgb(245, 221, 5)'
                            }}></div>
                        </div>
                    </div>



                    <div style={{
                        display:'flex',
                        justifyContent:'space-between',
                        width:'800px',
                        marginTop:'20px'
                    }}>
                        <div style={{
                            marginTop:'120px'

                        }}>
                            <img src="/task3/Capture6.PNG" alt="" />
                        </div>


                        <div style={{
                            width:'400px',
                            display:'flex',
                            flexDirection:'column',
                            justifyContent:'center'
                        }}>
                            <img src="/task3/Capture5.PNG" alt="" /><br />
                            <br />
                            <p style={{
                                textAlign:'left'
                            }}>
                            Lorem ipsum dolor sit amet consectetur <br />
                            adipisicing elit. Iure natus quidem esse <br />
                            praesentium. Dicta recusandae atque quae <br />
                            rerum, voluptatem repellendus autem iusto <br />
                            est eius eaque. Modi aspernatur reprehenderit <br />
                             mollitia unde.
                             </p>
                        </div>
                    </div>
                </SecoundSubDiv2>
            </SecoudDiv>

            <ThirdDiv>
                <ThirdSubDiv1>
                    <img src="/task3/Capture7.PNG" alt="" /> <br />
                    <br />
                    <h1>
                        YELLOW Cab NYC
                    </h1>
                    <p>
                        Pretium lectus quam id leo in vitae turpis massa.Felic imperdiet <br />
                        proin fermentum leo vel orci.Auctor urna nunc id cursus metus <br />
                        aliquam.Rtrum tellus pellentesque eu tincidunt tortor aliquam nulla <br />
                        facilici cras. <br />
                        <br />
                        <br />
                        Images from <u style={{
                            cursor:'pointer'
                        }}>Freepic</u> 
                    </p>
                </ThirdSubDiv1>

                <ThirdSubDiv2>
                    <img src="/task3/Capture8.PNG" alt="" />
                    <div></div>
                </ThirdSubDiv2>
            </ThirdDiv>


            <ForthDiv>
                <img src="/task3/Capture9.PNG" alt="" />
            </ForthDiv>

            <FifthDiv>

                <FifthSubDiv>
                        <img src="https://pngimg.com/uploads/taxi/taxi_PNG6.png" alt="" /> <br />
                        <br />
                        <br />
                        <br />

                        <h1 style={{
                        color: 'rgb(52, 52, 52)'
                        }}>Administration</h1>
                        <h1>(702) 365-1900</h1>
                        <br />
                        <br />

                        <h1 style={{
                        color: 'rgb(52, 52, 52)'
                        }}>Dispatch</h1>
                        <h1>(702) 369-5686</h1>
                        <br />
                        <br />

                        <h1 style={{
                        color: 'rgb(52, 52, 52)'
                        }}>Lost and Found</h1>
                        <h1>(702) 365-1900</h1>
                </FifthSubDiv>

            </FifthDiv>


            <SixthDiv>
                <SixthLeftDiv>

                <SixthLeftSubDiv1>
                    <h1>Get in touch</h1>
                    <br />
                    <br />

                    <p style={{
                        display:'flex',
                        
                    }}>
                        Lorem ipsum, dolor sit amet consectetur <br />
                        adipisicing elit. Modi corporis hic <br />
                        tempora ab sed corrupti!
                    </p>
                    <br />
                    <br />

                    <p>
                        Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Dolorum accusantium <br />
                        impedit quos praesentium cumque, doloribus, <br />
                        officia similique odio perspiciatis libero <br />
                        voluptas illum animi.
                    </p>
                    <br />
                    <div>
                        <img src="https://iconape.com/wp-content/png_logo_vector/cib-facebook.png" alt="" />
                        <img src="https://www.witness.org/wp-content/uploads/2018/11/5a2fe479cc45e43754640849.png" alt="" />
                        <img src="https://pnggrid.com/wp-content/uploads/2021/04/instagram-black-logo-1024x1024.png" alt="" />
                        <img src="https://www.pngmart.com/files/20/Youtube-Logo-PNG-Isolated-Clipart.png" alt="" />
                    </div>
                </SixthLeftSubDiv1>

                <SixthLeftSubDiv2>
                    <h1>CALL US</h1>
                    <br />
                    <p>1(234)567-891 <br />
                    1(234)987-654 </p>
                    <br />
                    <br />
                    <h1>LOCATION</h1>
                    <br />
                    <p>
                        121 Rock Street, 21 Avenue, <br />
                        New York, NY 92103-9000
                    </p>
                    <br />
                    <br />
                    <h1>OUR TOP SERVICES</h1>
                    <br />
                    <p>
                        Local Transfers <br />
                        Airport Transfers <br />
                        Excursions and Tours
                    </p>
                    
                </SixthLeftSubDiv2>
                </SixthLeftDiv>

                <SixthRightDiv>
                <TextField id="outlined-basic" label="Enter your name" variant="outlined" sx={{
                    width:'400px',
                    border:'1px solid rgb(88, 88, 88)',
                    borderRadius:'5px',
                    backgroundColor:'white',
                    marginBottom:'5px'
                }} />
                <TextField id="outlined-basic" label="Enter a valid email address" variant="outlined" sx={{
                    width:'400px',
                    border:'1px solid rgb(88, 88, 88)',
                    borderRadius:'5px',
                    backgroundColor:'white',
                    marginBottom:'5px'
                }} />
                <TextField
          id="outlined-multiline-static"
          label="Massage"
          multiline
          rows={4}
           sx={{
            width:'400px',
            border:'1px solid rgb(88, 88, 88)',
            borderRadius:'5px',
            backgroundColor:'white',
            marginBottom:'5px'
        }}
        />
                <button>SUBMIT</button>
                </SixthRightDiv>
                
            </SixthDiv>

            <LastDiv>
                <h1>Design by Muhammad Asif</h1>
            </LastDiv>
        </Container>
    );
};

export default Task3;

const Container=style.div``

const NavDiv=style.div`
width:100vw;
height:40px;
display:flex;
justify-content:space-between;
align-items:center;
p{
  color: rgb(161, 160, 160);
  font-size:30px;
  margin-left:20px;
}
`

const FirstDiv=style.div`
img{
    width:100vw;
    height:100vh;
}

`

const SecoudDiv=style.div`
display:flex;
flex-direction:column;
align-items:center;
`

const SecoundSubDiv1=style.div`
display:flex;
justify-content:space-evenly;
width:70vw;
margin-top:40px;
div{
    height:80vh;
    width:280px;
    background-color: rgb(245, 221, 5);
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    box-shadow:5px 5px 20px 3px black;
    img{
        width:250px;
    }
    button{
        background-color:rgb(245, 221, 5);
        border:none;
        cursor:pointer;
    }
}
`

const SecoundSubDiv2=style.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top:40px;
`

const ThirdDiv=style.div`
background-color: rgb(245, 221, 5);
height:120vh;
width:100vw;
display:flex;
justify-content:space-evenly;
align-items:center;
padding:50px 0px;
`

const ThirdSubDiv1=style.div`
img{
    width:500px;
}
`

const ThirdSubDiv2=style.div`
height:600px;
img{
    width:400px;
    position:relative;
    top:80px;
    z-index:2;
}
div{
    height:350px;
    width:400px;
    background-color:white;
    position:relative;
    bottom:220px;
    left:50px;
}
`

const ForthDiv=style.div`
margin-top:40px;
img{
    width:100vw;
}
`

const FifthDiv=style.div`
background-image:url('https://img.freepik.com/premium-photo/taxi-brooklyn-bridge_268835-32.jpg');
background-repeat:no-repeat;
background-position:center;
background-size:cover;
width:100vw;
height:130vh;
`

const FifthSubDiv=style.div`
text-align:center;
background-color:white;
height:550px;
width:400px;
margin-left:20px;
img{
    width:200px;
}
`

const SixthDiv=style.div`
background-color: rgb(245, 221, 5);
display:flex;
justify-content:space-evenly;
`

const SixthLeftDiv=style.div`
display:flex;
width:700px;
justify-content:space-evenly;
padding:20px 0px;
`

const SixthLeftSubDiv1=style.div`
img{
    width:50px;
    margin-right:35px;
}
`

const SixthLeftSubDiv2=style.div``

const SixthRightDiv=style.div`
display:flex;
flex-direction:column;
width:600px;
justify-content:center;
align-items:center;

button{
    color:white;
    background-color:black;
    width:150px;
    height:30px;
    font-size:20px;
    cursor:pointer;
}
`

const LastDiv=style.div`
  background-color: rgb(36, 36, 36);
  height:70px;
  text-align:center;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
`