import React from 'react'
import styled, {keyframes} from 'styled-components'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { sliderItems } from './Data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mobile } from '../Responsive';

const ZoomAnimation = keyframes`
0% {
    transform: scale(1);
   }
50% {
    transform: scale(1.05);
   }
100%{
    transform: scale(1);
   }
`

const Container = styled.div`
height: calc(100vh - 125px);
position: relative;
width: 100%;
display: flex;
overflow: hidden;
`

const Wrapper = styled.div`
position: relative;
height: 100%;
display: flex;
transform: translateX(${({slideIndex}) => (slideIndex * -100)}vw);
transition: 1.5s ease-in-out;
`

const Slide = styled.div`
padding: 0 calc((100vw - 1300px) / 4);
position: relative;
max-width: 100%;
width: 100vw;
height: 100%;
display: flex;
align-items: center;
justify-content: start;
background: ${({layer}) => layer};
overflow: hidden;
`

const ImgContainer = styled.div`
`

const Img = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-position: ${({position}) => position};
object-fit: cover;
z-index: -5;
transform: scale(1);
visibility: ${({visibility}) => visibility};
animation: ${ZoomAnimation} 20s linear infinite;

`

const ImgWrap2 = styled.div`
position: absolute;
top:0;
left:0;
width: calc(100% / 3);
height: 100%;
background: ${({layer}) => layer};
border: none;
outline: none;
border-style: none;

@media screen and (max-width: 600px) {
    width: 100%;
}
`

// SLIDE 3 INFO
const InlineInfoWrapper = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 0;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: end;
writing-mode: vertical-rl;
transform: rotate(180deg);
z-index: 10;

@media screen and (max-width: 600px) {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    writing-mode: horizontal-tb;
    transform: rotate(0);
}
`

const InlineTitle = styled.h1`
color:#CBBA9C;
text-transform: uppercase;
font-weight: 700;
font-size: ${({inlineFontSize}) => inlineFontSize};

`

const InlineDesc = styled.p`
font-size: clamp(12px, 1.1vw, 3rem);
font-weight: 200;
color:#CBBA9C;

@media screen and (max-width: 600px) {
    margin: 10px 0;
}
`

const InlineButton = styled(Link)`
text-decoration: none;
visibility: ${({visibilityInlineBtn}) => visibilityInlineBtn};
position: absolute;
bottom: 25%;
left: 50%;
transform: translate(-50%);
display: flex; 
align-items: center;
justify-content: center;
background-color: rgba(0,0,0,0.4);
color: white;
border: 2px solid #CBBA9C;
font-size: 18px;
font-style: normal;
height: 60px;
margin: 0;
width: 14%;
min-width: 180px;
outline: 2px solid transparent;
outline-offset: -7px;
transition: 0.3s ease-in-out;
cursor: pointer;
z-index: 100;

&:hover {
    background-color: black;
    color: white;
    border: 2px solid black;
    outline: 2px solid #CBBA9C;
    outline-offset: -7px;
    transition: 0.3s ease-in-out;
    }
`

// -------------------------
const ImgWrap3 = styled.div`
position: absolute;
top:0;
left:calc(100% / 3);
width: calc(100% / 3);
height: 100%;
background: ${({layer}) => layer};

@media screen and (max-width: 600px) {
    display: none;
}
`

const ImgWrap4 = styled.div`
position: absolute;
top:0;
right:0;
width: calc(100% / 3);
height: 100%;
background: ${({layer}) => layer};

@media screen and (max-width: 600px) {
    width: calc(100% / 2);
}
`

const Img2 = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-position: ${({position}) => position};
object-fit: cover;
z-index: -6;
border: none;
outline: none;
border-style: none;
z-index: -6;
overflow:hidden;

@media screen and (max-width: 600px) {
    width: 50%;
}
`

const Img3 = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-position: ${({position}) => position};
object-fit: cover;
z-index: -6;
`

const Img4 = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
object-position: ${({position}) => position};
object-fit: cover;
z-index: -6;
`

const InfoContainer = styled.div`
position: relative;
padding: 1rem;
height: calc(100vh - 100px);
flex: 1;
display: flex; 
flex-direction: column;
justify-content: center;
align-items: ${({align}) => align};
z-index: 10;
`

const InfoWrapper = styled.div`
margin: 0 1rem;
padding: 10px 30px;

/* custom-style */
border-left: ${({borderLeft}) => borderLeft};
border-right: ${({borderRight}) => borderRight};

/* slide 3 only */
position: ${({positionAbs}) => positionAbs};
top: ${({top}) => top};
bottom: ${({bottom}) => bottom};
left: ${({left}) => left};

@media screen and (max-width: 780px){
    background-color: ${({infoLayer}) => infoLayer};
    visibility: ${({visibility}) => visibility};
}

@media screen and (max-width: 420px){
    margin: 0 0px;
}
`

const SubTitle = styled.p`
color:#CBBA9C;
text-transform: uppercase;
font-size: clamp(12px, 1.1vw, 3rem);
font-weight: 200;
`

const Title = styled.h1`
font-size: ${({fontSize}) => fontSize};
color:#CBBA9C;
text-transform: uppercase;
font-weight: 700;
`

const Desc = styled.p`
font-style: italic;
color:#CBBA9C;
font-size: clamp(12px, 1.1vw, 3rem);
font-weight: 300;
margin: 10px 0;
`

const Button = styled(Link)`
text-decoration: none;
display: flex; 
align-items: center;
justify-content: center;
background-color: transparent;
color: white;
border: 2px solid #CBBA9C;
font-size: 18px;
font-style: normal;
height: 60px;
margin: 0;
width: 180px;
outline: 2px solid transparent;
outline-offset: -7px;
visibility: ${({visibility}) => visibility};
transition: 0.3s ease-in-out;
cursor: pointer;

&:hover {
    background-color: black;
    color: white;
    border: 2px solid black;
    outline: 2px solid #CBBA9C;
    outline-offset: -7px;
    transition: 0.3s ease-in-out;
}
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
bottom: 12%;
left: ${({direction}) => (direction === "left" && "35%")};
right: ${({direction}) => (direction === "right" && "35%")};
cursor: pointer;
margin: auto;
opacity: 0.4;
transition: 0.3s ease-in-out;
z-index: 2;

&:hover {
    opacity: 1;
    transition: 0.3s ease-in-out
} 

@media screen and (max-width: 415px){   
    left: ${({direction}) => (direction === "left" && "30%")};
    right: ${({direction}) => (direction === "right" && "30%")};
}
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
        console.log(slideIndex)
    }

    return (
        <Container>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item, index) => (
                    <Slide key={index} layer={item.backgroundLayer}>
                        <ImgContainer>
                            <Img 
                                src={item.img} 
                                position={item.position}
                                visibility={item.visibility}
                                />
                            <ImgWrap2 layer={item.backgroundLayer2}>
                                <Img2 src={item.img2} position={item.position2}/>
                                <InlineInfoWrapper>
                                    <InlineTitle inlineFontSize={item.inlineFontSize}>
                                        {item.inlineTitle}
                                    </InlineTitle>
                                    <InlineDesc>{item.inlineDesc}</InlineDesc>
                                </InlineInfoWrapper>
                            </ImgWrap2>
                            <ImgWrap3 layer={item.backgroundLayer3}>
                                <Img3 src={item.img3} position={item.position3}/>
                            </ImgWrap3>
                            <ImgWrap4 layer={item.backgroundLayer4}>
                                <Img4 src={item.img4} position={item.position4}/>
                            </ImgWrap4>
                        </ImgContainer>
                        <InfoContainer align={item.align}>
                            <InfoWrapper
                                borderLeft={item.borderLeft}
                                borderRight={item.borderRight}
                                infoLayer={item.infoLayer}
                                visibility={item.visibility}
                                >
                                <SubTitle>{item.subTitle}</SubTitle>
                                <Title fontSize={item.fontSize}>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <Button 
                                    visibility={item.visibility}
                                    to={`/products/${item.categorySlide}`}
                                    >Shop now
                                </Button>
                            </InfoWrapper>
                            <InlineButton 
                                to={`/products/${item.inlineCategory}`}
                                visibilityInlineBtn={item.visibilityInlineBtn}
                                >Shop now
                            </InlineButton>
                        </InfoContainer>
                    </Slide> 
                ))}   
            </Wrapper>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackOutlinedIcon />
            </Arrow>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowForwardOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default Slider
