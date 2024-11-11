import React, { useState } from 'react';
import styled from 'styled-components';
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../Responsive';
import BgImg from '../images/bg4.jpg';

const Container = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${BgImg});
    background-size: cover;
    background-position: center;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: clamp(3rem, 10vw, 5rem);
    margin: 5px;
    color: #cbba9c;
`;

const Description = styled.p`
    font-size: clamp(1rem, 2vw, 20px);
    font-weight: 200;
    margin: 5px;
    text-align: center;
    color: white;
`;

const SuccessMsg = styled.p`
    color: green;
    font-style: italic;
    font-size: clamp(1rem, 2vw, 20px);
    color: greenyellow;
    margin: 10px 0;
`;

const FormContainer = styled.form`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-around;

    ${mobile({
        width: '85%',
    })};
`;

const Input = styled.input`
    width: 80%;
    border: none;
    padding: 5px 10px;
    outline: none;
`;

const Button = styled.button`
    width: 20%;
    border: none;
    background-color: #cbba9c;
    color: black;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        transform: scale(1.2);
        transition: 0.2s ease-in-out;
    }
`;

const NewsLetters = () => {
    const [successMsg, setSuccessMsg] = useState();

    const handleSubmit = (e) => {
        setSuccessMsg('Thank you for your subscription');
        e.target.reset();
        e.preventDefault();
    };

    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Subscribe for the latest fashion trends</Description>
            <SuccessMsg>{successMsg}</SuccessMsg>
            <FormContainer onSubmit={handleSubmit}>
                <Input type="email" required placeholder="Email" />
                <Button type="submit">
                    <SendIcon />
                </Button>
            </FormContainer>
        </Container>
    );
};

export default NewsLetters;
