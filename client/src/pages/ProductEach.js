import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../Responsive';
import { useLocation } from 'react-router-dom';
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux';
import { useDispatch } from 'react-redux';

const Container = styled.div`
height: 100%;
padding: 3rem 0;
`

const Wrapper = styled.div`
padding: 1rem;
display: flex;

@media screen and (max-width: 640px) {
    flex-direction: column;
}
`

const ImgContainer = styled.div`
flex: 1;
display:flex;
justify-content: end;
margin-bottom: 1rem;
margin-right: 2rem;

@media screen and (max-width: 640px) {
    margin-right: 0;
    justify-content: center;
}
`

const Img = styled.img`
width: auto;
max-height: 60vh;
max-width: 100%;
object-fit: cover;

${mobile({
    height:"40vh"
})};
`

const InfoContainer = styled.div`
flex: 1;
margin-left: 2rem;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;

@media screen and (max-width: 640px) {
    margin-left: 0;
    align-items: center;
}
`

const InfoWrapper = styled.div`
width: 100%;
padding: 0 5px;
`
    
const Title = styled.h1`
font-size: 3rem;
text-transform: uppercase;
font-weight: 200;
`
    
const Description = styled.p`
margin: 20px 0;
`

const Price = styled.span`
font-size: 30px;
`

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
padding: 5px 0;
margin: 30px 0 10px 0;

@media screen and (max-width: 720px){
    flex-direction: column;
}
`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterTitle = styled.span`
margin-right: 5px;
`

const FilterColorWrap = styled.div`
display: flex; 
flex-wrap: wrap;
margin-right: 15px;
`

const FilterColor = styled.div`
width: 20px;
height: 20px;
outline: 1.2px solid lightgray;
outline-offset: 2px;
margin: 4px 4px;
border-radius: 50%;
background-color: ${({color}) => color};
cursor: pointer;
transition: 0.2s ease-in-out;

&:hover{
    transform: scale(1.4);
    transition: 0.2s ease-in-out;
}
`

const FilterSize = styled.select`
margin: 10px;
padding: 5px;
`

const FilterSizeOption = styled.option`
`

const AddContainer = styled.div`
width: 100%;
padding: 10px 0;  
display: flex;
align-items: center;
justify-content: start;
`

const AmountContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

const Amount = styled.span`
margin: 0 5px;
font-size: 1.2rem;
width: 30px;
height: 30px;
border: 1px solid black;
display: flex;
justify-content: center;
align-items: center;
`

const MinusIcon = styled(RemoveIcon)`
transition: 0.3s ease-in-out;
margin-right: 5px;
cursor: pointer;

&:hover {
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
    border-radius: 50%;
    background-color: #CBBA9C;
}
`

const PlusIcon = styled(AddIcon)`
transition: 0.3s ease-in-out;
margin-left: 5px;
cursor: pointer;

&:hover {
    transform: scale(1.2);
    transition: 0.3s ease-in-out;
    border-radius: 50%;
    background-color: #CBBA9C;
}
`

const Button = styled.button`
align-self: center;
margin: 2rem 0rem;
text-decoration: none;
display: flex; 
align-items: center;
justify-content: center;
background-color: transparent;
color: black;
border: 2px solid #CBBA9C;
font-size: 12px;
height: 40px;
width: 80%;
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

const ProductEach = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const id = location.pathname.split("/")[2];

    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState({})
    const [size, setSize] = useState({})

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
                setColor(res.data.color[0]);
                setSize(res.data.size[0]);
            }catch{
            };
        };
        getProduct();
    },[id])


    const handleQuantity = (type) => {
        if (type === "decrease") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const handleClick = () => {
        dispatch(
            addProduct({
                ...product, 
                quantity, 
                color, 
                size
            }) 
        )
    };

    return ( 
        <Container>
            {/* SINGLE PRODUCT PAGE */}
            <Wrapper>
                <ImgContainer>
                    <Img src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <InfoWrapper>
                        <Title>{product.title}</Title>
                        <Description>{product.description}</Description>
                        <Price>€{product.price}</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color:</FilterTitle>
                                <FilterColorWrap>
                                    {product.color?.map(color => (
                                        <FilterColor 
                                            key={color} 
                                            color={color}
                                            onClick={() => setColor(color)}/>
                                    ))}
                                </FilterColorWrap>
                            </Filter>
                            <Filter>
                                <FilterTitle>Size:</FilterTitle>
                                <FilterSize onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map(size => (
                                    <FilterSizeOption key={size}>{size}</FilterSizeOption>
                                ))}
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <MinusIcon onClick={() => handleQuantity("decrease")}/>
                                <Amount>{quantity}</Amount>
                                <PlusIcon onClick={() => handleQuantity("increase")}/>
                            </AmountContainer>
                        </AddContainer>
                    </InfoWrapper>
                    <Button onClick={handleClick}>
                        Add To Cart
                    </Button>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default ProductEach;
