import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { addOrders } from '../redux/yourOrdersRedux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 80vh;
`

const H1 = styled.h1`
width: 40%;
height: 100px;
color: #CBBA9C;
text-align: center;
`

const P = styled.p`
color: yellowgreen;
font-style: italic;
`

const Button = styled(Link)`
text-decoration: none;
color: black;
display: flex; 
align-items: center;
justify-content: center;
background-color: transparent;
color: black;
border: 2px solid #CBBA9C;
font-size: 14px;
font-style: normal;
height: 40px;
margin: 2rem 0;
width: 40%;
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

const Success = () => {
    const cart = useSelector(state => state.cart)

  // const handleClick = () => {
  //   dispatch(
  //     addOrders({...cart})
  // )
  // }

    const dispatch = useDispatch()
    const location = useLocation()

    return (
        <Container>
            <H1>PAYMENT SUCCESSFUL</H1>
            <P>Your orders have been successfully placed</P>
            <Button to="/">Continue shopping</Button>
        </Container>
    )
};

export default Success;
