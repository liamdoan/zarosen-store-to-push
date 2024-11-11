import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { mobile } from '../Responsive'
import { Link } from 'react-router-dom'

// -------- clarify child components before calling in parents --------

const ImgContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const Img = styled.img`
object-fit: cover;
width: 100%;
opacity: 0.5;
transform: scale(1.2);
transition: transform 5s, opacity 0.3s ease-in-out;

/* ${mobile({
    height:"25vh",
    objectFit: "cover"
})}; */
`

const Overlay = styled.div`
position: absolute;
transform: skew(12deg);
top:0; 
bottom: 0;
left: -40%;
right: 0;
background-color: rgba(255,255,255, 0.1);
overflow: hidden;
width: 0;
height: 100%;
transition: .5s ease;
`

const Info = styled.div`
position: absolute;
height: 100%;
width: 100%;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
opacity: 0.9;
transition: 0.3s ease-in-out;
`

const Title =styled.h1`
font-size: clamp(12px, 2.3vw, 5rem);
letter-spacing: 1.5px;
color: white;
margin: 15px;
font-weight: 800;
text-transform: uppercase;
`

const Button = styled.button`
display: flex; 
align-items: center;
justify-content: center;
background-color: transparent;
color: white;
border: 2px solid #CBBA9C;
font-size: clamp(6px, 1.6vw, 3rem);
font-style: normal;
height: 10%;
min-height: 35px;
margin: 0;
width: 50%;
min-width: 120px
outline: 2px solid transparent;
outline-offset: -7px;
visibility: hidden;
transition: 0.3s ease-in-out;
cursor: pointer;
`

const Container = styled(Link)`
position: relative;
flex: 1;
overflow: hidden;

&:hover {
    ${Img} {
        transform: scale(1);
        opacity: 1;
        transition: transform 4s, opacity 0.3s ease-in-out;
    };
    ${Info} {
        transform: scale(1.17);
        opacity: 1;
        transition: 0.3s ease-in-out;
    };
    ${Overlay} {
        width: 60%;
    };
    ${Button} {
        background-color: black;
        color: white;
        border: 2px solid black;
        outline: 2px solid #CBBA9C;
        outline-offset: -7px;
        visibility: visible;
        transition: 0.3s ease-in-out;
    }
}
`
 
const CategoryItem = ({item}) => {
    return (
        <Container to={`/products/${item.category}`}>
                <ImgContainer>
                    <Img src={item.img}/>
                    <Overlay></Overlay>
                </ImgContainer>
                <Info>
                    <Title>
                        {item.title}
                    </Title>
                    <Button>SHOP NOW</Button>
                </Info>
        </Container>
    )
}

CategoryItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired
    }).isRequired
}

export default CategoryItem
