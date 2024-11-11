import React from 'react';
import styled from 'styled-components';
import { mobile } from '../Responsive';
import { useSelector } from 'react-redux';
import { clearWish } from '../redux/wishRedux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
`;

const Wrapper = styled.div`
    padding: 3rem 20px;
    width: 100%;

    ${mobile({
        padding: '20px 10px',
    })};
`;

const Title = styled.h1`
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
`;

const TopButton = styled(Link)`
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: 2px solid #cbba9c;
    font-size: 14px;
    font-style: normal;
    margin: 2rem 0;
    padding: 7px 7px;
    outline: 2px solid transparent;
    outline-offset: -7px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    z-index: 100;

    &:hover {
        background-color: black;
        color: white;
        border: 2px solid black;
        outline: 2px solid #cbba9c;
        outline-offset: -5px;
        transition: 0.3s ease-in-out;
    }

    @media screen and (max-width: 640px) {
        margin: 5px 0;
    }
`;

const TopTextsWrap = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 640px) {
        margin: 5px 0;
    }
`;

const TopText = styled(Link)`
    text-decoration: underline;
    margin: 5px 10px;
    color: black;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #cbba9c;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 640px) {
        margin: 5px 0;
    }
`;

const ClearBagButton = styled.button`
    background-color: #cbba9c;
    text-decoration: none;
    color: black;
    margin: 5px 0;
    padding: 7px 7px;
    text-transform: uppercase;
    border: 2px solid #cbba9c;
    outline: 2px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
        border: 2px solid black;
        outline: 2px solid #cbba9c;
        outline-offset: -5px;
        transition: 0.3s ease-in-out;
    }

    @media screen and (max-width: 640px) {
        margin: 5px 0;
    }
`;

// BOTTOM
const Bottom = styled.div`
    width: 100%;
    height: 100%;
`;

// INFO SECTION
const Info = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
`;

const ProductContainer = styled.div`
    flex: 1;
    height: 100%;
    min-width: 260px;
    max-width: 20%;
    margin: 2rem 2rem;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 768px) {
        border: 1px solid lightgray;
        margin: 10px 1rem;
    }

    &:hover {
        box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
        border: none;
        transform: scale(1.1);
        transition: 0.3s ease-in-out;
    }
`;
const ProductDetail = styled.div`
    display: flex;

    @media screen and (max-width: 290px) {
        flex-direction: column;
    }
`;

const ImgContainer = styled.div`
    flex: calc(3 / 5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.img`
    height: 35vh;
    width: 100%;
    object-fit: cover;
`;

const Details = styled.div`
    margin: 5px 0;
    font-weight: 300;
    flex: calc(2 / 5);
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ProductName = styled.span`
    color: black;
    margin: 10px 0;
    font-size: clamp(1.1rem, 1.5vw, 3rem);
`;

const ProductPrice = styled.div`
    margin: 10px 0;
    font-size: clamp(0.9rem, 1vw, 2rem);
`;

const Button = styled(Link)`
    text-decoration: none;
    color: black;
    margin: 5px 0;
    padding: 4px 7px;
    text-transform: uppercase;
    background-color: transparent;
    border: 2px solid #cbba9c;
    outline: 2px solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: black;
        color: white;
        border: 2px solid black;
        outline: 2px solid #cbba9c;
        outline-offset: -5px;
        transition: 0.3s ease-in-out;
    }
`;

const Wish = () => {
    const cart = useSelector((state) => state.cart);
    const wish = useSelector((state) => state.wish);

    const dispatch = useDispatch();

    const handleClickRemove = (e) => {
        e.preventDefault();
        dispatch(clearWish());
    };

    return (
        <>
            <Container>
                <Wrapper>
                    <Title>YOUR WISHLIST</Title>
                    <Top>
                        <TopButton to="/">Continue shopping</TopButton>
                        <TopTextsWrap>
                            <TopText to="/cart">Shopping bag ({cart.products.length})</TopText>
                            <TopText to="/wish">Wishlist ({wish.products.length})</TopText>
                        </TopTextsWrap>
                        <ClearBagButton onClick={handleClickRemove}>Clear Wish List</ClearBagButton>
                    </Top>
                    <Bottom>
                        <Info>
                            {wish.products.map((product) => (
                                <ProductContainer key={product._id}>
                                    <ProductDetail>
                                        <ImgContainer>
                                            <Img src={product.img} />
                                        </ImgContainer>
                                        <Details>
                                            <ProductName>{product.title}</ProductName>
                                            {/* <ProductColor >Color: <Color color={product.color}/></ProductColor> */}
                                            {/* <ProductSize >Size: {product.size}</ProductSize> */}
                                            <ProductPrice> £{product.price}</ProductPrice>
                                            <Button to={`/product/${product._id}`}>See more</Button>
                                        </Details>
                                    </ProductDetail>
                                </ProductContainer>
                            ))}
                        </Info>
                    </Bottom>
                </Wrapper>
            </Container>
        </>
    );
};

export default Wish;
