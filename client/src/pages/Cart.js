import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import ImgProduct from "../images/img-product.jpg"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../Responsive';
import StripeCheckout from "react-stripe-checkout"
import {userRequest} from "../requestMethods"
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { clearBag } from '../redux/cartRedux';
import { addOrders } from '../redux/yourOrdersRedux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const KEY = process.env.REACT_APP_STRIPE;
// variable is always prefixed with REACT_APP

const Container = styled.div`
width: 100%;
`

const Wrapper = styled.div`
padding: 3rem 20px;
width: 100%;


${mobile({
    padding:"20px 10px"
})};
`

const Title = styled.h1`
text-align: center;

`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;

@media screen and (max-width: 640px) {
    flex-direction: column;
}
`

const TopButton = styled(Link)`
text-decoration: none;
color: black;
margin: 5px 0;
padding: 7px 7px;
text-transform: uppercase;
background-color: transparent;
border: 2px solid #CBBA9C;
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
    outline: 2px solid #CBBA9C;
    outline-offset: -5px;
    transition: 0.3s ease-in-out;
}

@media screen and (max-width: 640px) {
    margin: 5px 0;
}
`

const TopTextsWrap = styled.div`
display: flex;
flex-direction: column;

@media screen and (max-width: 640px) {
    margin: 5px 0;
}
`

const TopText = styled(Link)`
text-decoration: underline;
margin: 5px 10px;
color: black;
cursor: pointer;
transition: 0.2s ease-in-out;

&:hover {
    color: #CBBA9C;
    transition: 0.2s ease-in-out;
}

@media screen and (max-width: 640px) {
    margin: 5px 0;
}
`

const ClearBagButton = styled.button`
background-color: #CBBA9C;
text-decoration: none;
color: black;
margin: 5px 0;
padding: 7px 7px;
text-transform: uppercase;
border: 2px solid #CBBA9C;
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
    outline: 2px solid #CBBA9C;
    outline-offset: -5px;
    transition: 0.3s ease-in-out;
}

@media screen and (max-width: 640px) {
    margin: 5px 0;
}
`


// ----------------------------------------------------BOTTOM----------------------------------------------------

const Bottom = styled.div`
display: flex;
/* justify-content: space-between; */
@media screen and (max-width: 640px){
    flex-direction: column;
}
`

const Info = styled.div`
/* background-color: yellow; */
flex: 3;
`

const ProductContainer = styled.div`
margin: 5px 0;
/* background-color: pink; */
/* display: flex;
justify-content: space-between; */
`

const ProductDetail = styled.div`
display: flex;

@media screen and (max-width: 290px) {
    flex-direction: column;
}
`

const ImgContainer = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
`

const Img = styled.img`
height: 200px;
width: auto;
/* width: auto; */
`

const Details = styled.div`
/* background-color: blue; */
font-weight: 300;
flex: 1;
padding: 10px;
display: flex;
flex-direction: column;
justify-content: start;
`

const ProductName = styled.span``
const ProductID = styled.span``

const ProductColor = styled.div`
display: flex; 
`

const Color = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
margin: 0 5px;
background-color: ${({color}) => color};
`

const ProductSize = styled.div`
`

const PriceDetail = styled.div`
margin: 1rem 0;
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 15px;
`

const ProductAmount = styled.div`
`

const ProductPrice = styled.div`
`

const RemoveButton = styled.button`
`

const Hr = styled.hr`
background-color: lightgray;
border: none; 
height: 1px;
margin: 10px 20px;

@media screen and (max-width: 314px) {
    margin: 10px 7px;
}
`

// --------------------------SUMMARY SECTION --------------------

const Summary = styled.div`
flex: 1;
border: 0.5px solid gray;
padding: 20px;
height: 100%;
`

const SummaryTitle = styled.h1`
`

const SummaryItem = styled.div`
margin: 30px 0;
display: flex;
justify-content: space-between;
font-size: ${({type}) => type === "total" && "24px"};
`

const SummaryItemText = styled.span`
`

const SummaryItemPrice = styled.span`
`

const Button = styled.button`
display: flex; 
align-items: center;
justify-content: center;
background-color: transparent;
color: black;
border: 2px solid #CBBA9C;
font-size: 14px;
font-style: normal;
height: 40px;
margin: 0;
width: 100%;
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


const Cart = () => {

    const cart = useSelector(state => state.cart)
    console.log(cart)

    const wish = useSelector(state => state.wish)

    const [stripeToken, setStripeToken] = useState(null)

    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }
    // console.log(stripeToken)

    const dispatch = useDispatch()

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 100
                    // cart.total * 100
                });
                navigate("/success", {data:res.data})
                dispatch(
                    clearBag()
                );
                
                // navigate("/your-orders")

                // dispatch(
                //     addOrders(...cart)
                // )
            }catch {

            }
        };
        stripeToken && cart.total >= 1 && makeRequest()
    }, [stripeToken, cart.total, navigate])


    const handleClickRemove = (e) => {
        e.preventDefault();
        dispatch(
            clearBag()
        )
    }

    return (
        <>
        {/* <h1>CART PAGE</h1> */}
        <Container>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton to="/">Continue shopping</TopButton>
                    <TopTextsWrap>
                        <TopText to="/cart">Shopping bag ({cart.products.length})</TopText>
                        <TopText to="/wish">Wishlist ({wish.products.length})</TopText>
                    </TopTextsWrap>
                    <ClearBagButton onClick={handleClickRemove}>Clear bag</ClearBagButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map(product => (
                            <ProductContainer>
                            <ProductDetail>
                                <ImgContainer>
                                    <Img  src={product.img}/>
                                </ImgContainer>
                                <Details>
                                    <ProductName >Product: {product.title}</ProductName>
                                    {/* <ProductID>ID: {product._id}</ProductID> */}
                                    <ProductColor >Color: <Color color={product.color}/></ProductColor>
                                    <ProductSize >Size: {product.size}</ProductSize>
                                    <PriceDetail>
                                        <AmountContainer>
                                            <ProductAmount>Amounts: {product.quantity}</ProductAmount>
                                        </AmountContainer>
                                        <ProductPrice >
                                            £{product.price * product.quantity}
                                        </ProductPrice>
                                    </PriceDetail>
                                    {/* <RemoveButton>Remove</RemoveButton> */}
                                </Details>
                            </ProductDetail>    
                            <Hr/>
                        </ProductContainer>
                        ))}
                    </Info>
                    <Summary>
                        <SummaryTitle>Order summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal;</SummaryItemText>
                            <SummaryItemPrice>£{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping:</SummaryItemText>
                            <SummaryItemPrice>£0</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping discount:</SummaryItemText>
                            <SummaryItemPrice>-£0</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total:</SummaryItemText>
                            <SummaryItemPrice>£{cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout 
                            name="ABCDEF Shop" 
                            image=""
                            billingAddress
                            shippingAddress
                            description={`Your total is £${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                            >
                            <Button>CHECK OUT</Button>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
        </Container>
        </>
    )
}

export default Cart
