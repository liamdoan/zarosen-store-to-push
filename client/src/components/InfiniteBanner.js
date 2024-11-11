import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
    height: 75px;
    width: 100%;
    overflow: hidden;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Slide = styled.div`
    background-color: black;
    position: relative;
    width: 100%;
    height: 100%;
    /* ----------create 2 lines possibility by removing---------- */
    display: flex;
    align-items: center;
`;

const Banner1 = styled.div`
    position: absolute;
    display: block;
    margin: auto auto;
    white-space: nowrap;
    overflow: hidden;
    min-width: 100%;
`;

const Banner2 = styled.div`
    position: absolute;
    display: block;
    margin: auto auto;
    white-space: nowrap;
    overflow: hidden;
    min-width: 100%;
`;

const marqueeAnimation = keyframes`
0% {
    transform: translate(0,0);
};

100% {
    transform: translate(-100%, 0);
};
`;

const P1 = styled.p`
    color: #cbba9c;
    font-size: clamp(35px, 5vw, 85px);
    font-weight: 700;
    letter-spacing: 2px;
    white-space: nowrap;
    display: inline-block;
    padding-left: 100%;
    margin: 0 10px;
    text-align: center;
    min-width: 100%;
    height: 100%;
    line-height: 100%;
    text-transform: uppercase;
    animation: ${marqueeAnimation} 20s linear infinite;
`;

const P2 = styled.p`
    color: black;
    font-size: clamp(35px, 5vw, 85px);
    font-weight: 700;
    letter-spacing: 2px;
    display: inline-block;
    padding-left: 100%;
    margin: 0 10px;
    text-align: center;
    white-space: nowrap;
    min-width: 100%;
    height: 100%;
    line-height: 100%;
    text-transform: uppercase;
    -webkit-text-stroke: 0.5px white;
    animation: ${marqueeAnimation} 20s linear infinite;
    animation-delay: 10s;
    /* background-color: teal; */
`;

const InfiniteBanner = () => {
    return (
        <Container>
            <Wrapper>
                <Slide>
                    <Banner1>
                        <P1>Feel the class and elegance</P1>
                    </Banner1>
                    <Banner2>
                        <P2>Feel the class and elegance</P2>
                    </Banner2>
                </Slide>
            </Wrapper>
        </Container>
    );
};

export default InfiniteBanner;
