import React from 'react'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Slider from '../components/Slider'
import InfiniteBanner from '../components/InfiniteBanner';
import styled from 'styled-components';
import Blog from '../components/Blog';


const FeatureHeaderContainer = styled.div`
/* background-color: pink; */
width: 100%;
padding: 3rem 0 calc(3rem - 30px) 0; 
`

const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const SubTitle = styled.p`
/* background-color: orange; */
text-transform: uppercase;
font-size: 12px;
padding: 10px 10px 5px 10px;
color: #848484;
`

const Underline = styled.div`
height: 1px;
width: 50px;
background-color: black;
`
const TitleWrap = styled.div`
/* background-color: pink; */
padding: 15px 5px;

`
const Title = styled.p`
/* background-color: blue; */
padding: 15px;
text-transform: uppercase;
font-size: clamp(1.8rem, 4vw, 3rem);
font-weight: 800;
color:#CBBA9C;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`

const Span = styled.span`
margin: 0 15px;
color: black;
`

const Home = () => {

    return (
        <>
            <Slider/>
            <InfiniteBanner />
            <Categories />
            <FeatureHeaderContainer>
                <Wrapper>
                    <SubTitle>Popular collection</SubTitle>
                    <Underline></Underline>
                    <TitleWrap>
                        <Title>Features <Span>products</Span></Title>
                    </TitleWrap>
                </Wrapper>
            </FeatureHeaderContainer>
            <Products/>
            <Blog />
        </>
    )
}

export default Home 
