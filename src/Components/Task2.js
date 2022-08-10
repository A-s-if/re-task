import React from 'react';
import style from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

const Task2 = () => {
    return (
        <Container>
            <NavDiv>
                <img src="http://assets.stickpng.com/images/61291551319275000479abf2.png" alt="" />
            <MenuIcon sx={{
                fontSize:'large',
                marginRight:'20px',
                cursor:'pointer'
            }}></MenuIcon>
            </NavDiv>

            <FirstDiv>
                <img src="/task2/Capture.PNG" alt="" />
                <br />
                <br />
                <br />
                <h1>Toyota Concept-I Series</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, enim esse commodi <br /> ex molestiae nostrum incidunt iusto maxime soluta deleniti?</p>
            </FirstDiv>

            <SecoundDiv>
                <div>
                    <img src="/task2/Capture2.PNG" alt="" />
                </div>


                <div>
                    <h1>The future have arrived</h1>
                    <br />
                    <br />
                    <p>
                        Lorem ipsum dolor sit amet consectetur <br />
                        adipisicing elit. Placeat deleniti vitae <br />
                        explicabo hic deserunt mollitia, quibusdam <br />
                        dicta, veniam est soluta ullam, neque id <br />
                        commodi itaque recusandae enim adipisci <br />
                        iusto alias.
                    </p>
                </div>
            </SecoundDiv>

            <ThirdDiv>
                <div>
                    <h1>Less of a machine. <br />
                    More of a pal.</h1>
                    <br />
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur <br />
                        adipisicing elit. Dolor itaque modi <br />
                        doloremque accusantium, optio repellendus <br />
                        minus amet distinctio. Dignissimos, aut. <br />
                        Obcaecati facilis aspernatur corporis, numquam <br />
                        minima ut architecto repellendus dolor corrupti, <br />
                        aliquid, magnam natus soluta cum repellat <br />
                        itaque quis? Eligendi!
                    </p>
                    <br />
                    <button><pre>L E A R N  M O R E</pre></button>
                </div>

                <div>
                    <img src="/task2/Capture3.PNG" alt="" />
                </div>
            </ThirdDiv>

            <ForthDiv>
                <div>
                    <h1>Neue Toyota Concept <br />
                    Cars in Tokio</h1>
                    <br />
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur <br />
                        adipisicing elit. Dolor itaque modi <br />
                        doloremque accusantium, optio repellendus <br />
                        minus amet distinctio. Dignissimos, aut. <br />
                        Obcaecati facilis aspernatur corporis, numquam <br />
                        minima ut architecto repellendus dolor corrupti, <br />
                        aliquid, magnam natus soluta cum repellat <br />
                        itaque quis? Eligendi!
                    </p>
                    <br />
                    <button><pre>L E A R N  M O R E</pre></button>
                </div>


                <div>
                    <img src="/task2/Capture4.PNG" alt="" />
                </div>
            </ForthDiv>

            <FifthDiv>
                <div>
                    <img src="/task2/Capture5.PNG" alt="" />
                </div>
                <div>
                <h1>Concept-i looks as <br />
                    brillient</h1>
                    <br />
                    <br />
                    <p>
                        Lorem ipsum, dolor sit amet consectetur <br />
                        adipisicing elit. Dolor itaque modi <br />
                        doloremque accusantium, optio repellendus <br />
                        minus amet distinctio. Dignissimos, aut. <br />
                        Obcaecati facilis aspernatur corporis, numquam <br />
                        minima ut architecto repellendus dolor corrupti, <br />
                        aliquid, magnam natus soluta cum repellat <br />
                        itaque quis? Eligendi!
                    </p>
                    <br />
                    <button><pre>L E A R N  M O R E</pre></button>
                </div>
            </FifthDiv>

            <SixthDiv>
                <img src="/task2/Capture6.PNG" alt="" />
            </SixthDiv>

            <SeventhDiv>
                <div1>
                <div>
                    <img src="/task2/Capture7.PNG" alt="" />
                </div>
                <div>
                <h1>Join us in the future</h1>
                <br />
                <br />
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, enim esse commodi <br /> ex molestiae nostrum incidunt iusto maxime soluta deleniti?</p>
                    <br />
                    <button><pre>L E A R N  M O R E</pre></button>
                </div>
                </div1>
                <br />
                <br />
                <br />
                <h1>JOIN US IN THE FUTURE.</h1>
                <br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio enim, esse <br /> obcaecati odit doloremque saepe, soluta culpa iste non maxime nam <br /> Culpa doloremque similique, quae harum aliquid nam repellendus aspernatur!</p>


            </SeventhDiv>

            <EighthDiv>
                <img src="/task2/Capture8.PNG" alt="" />
            </EighthDiv>

            <NinthDiv>
                <h1>TOYOTA</h1>
                <br />
                <br />
                <NinthSubDiv>
                    <div>
                        <h3>
                            Headline
                        </h3>
                        <p>
                            Sample footer text
                        </p>
                    </div>
                    <div>
                        <h3>
                            Headline
                        </h3>
                        <p>
                            Sample footer text
                        </p>
                    </div>
                    <div>
                        <h3>
                            Headline
                        </h3>
                        <p>
                            Sample footer text
                        </p>
                    </div>
                </NinthSubDiv>
            </NinthDiv>
            
        </Container>
    );
};

export default Task2;

const Container=style.div``

const NavDiv=style.div`
border: 2px solid rgb(93, 92, 92);
height:50px;
display:flex;
justify-content:space-between;
align-items:center;
img{
    width:60px;
}
`

const FirstDiv=style.div``

const SecoundDiv=style.div`
height:100vh;
width:100vw;
display:flex;
justify-content:space-between;
align-items:center;
`

const ThirdDiv=style.div`
display:flex;
justify-content:space-between;
div1{
    button{
        color:white;
        background-color:black;
        padding:5px 20px;
        border-radius:20px;
        cursor:pointer;
    }
}
`


const ForthDiv=style.div`
display:flex;
justify-content:space-between;
div{
    button{
        color:white;
        background-color: rgb(33, 131, 196);
        padding:5px 20px;
        border-radius:20px;
        cursor:pointer;
        border:none;
    }
}
`

const FifthDiv=style.div`
display:flex;
justify-content:space-between;
align-items:center;
div{
    button{
        color:white;
        background-color:black;
        padding:5px 20px;
        border-radius:20px;
        cursor:pointer;
    }
`

const SixthDiv=style.div`
img{
    width:100vw;
}
`

const SeventhDiv=style.div`
div1{
    display:flex;
    justify-content:space-between;
    align-items:center;
    button{
      background-color: rgb(185, 79, 60);
      color:white;
      padding:5px 20px;
      border-radius:20px;
      cursor:pointer;
      border:none;
    }
}

`

const EighthDiv=style.div`
img{
    width:100vw;
}

`

const NinthDiv=style.div`
color:white;
background-color:rgb(62, 61, 61);
height:50vh;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`

const NinthSubDiv=style.div`
width:800px;
display:flex;
justify-content:space-evenly;
color:white;
`