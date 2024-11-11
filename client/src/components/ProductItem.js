import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { mobile } from '../Responsive';
import { Link } from 'react-router-dom';
import { addWish } from '../redux/wishRedux';
import { useDispatch } from 'react-redux';

const ContainerBig = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Wrapper = styled.div`
    position: relative;
    margin: 5px 5px 0 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;

    ${mobile({
        margin: '0',
    })};
`;

const Img = styled.img`
    height: 95%;
    width: 260px;
    object-fit: cover;
    z-index: 2;
`;

const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
    opacity: 0;
`;

const Icon = styled.div`
    background-color: white;
    margin: 10px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 4;
    cursor: pointer;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.2);
        transition: 0.3s ease-in-out;
    }
`;
const SubInfo = styled.div`
    align-self: center;
    width: 260px;
    margin: 5px 5px 20px 5px;
    display: flex;
    justify-content: space-between;
`;
const Title = styled(Link)`
    text-decoration: none;
    color: black;
    font-weight: 300;

    &:hover {
        text-decoration: underline;
        color: #cbba9c;
    }
`;

const Price = styled.p`
    color: black;
    font-weight: 300;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;

    &:hover {
        ${Info} {
            opacity: 1;
            transition: 0.3s ease-in-out;
        }
        ${Img} {
            transform: scale(0.95);
            transition: 1s ease-in-out;
        }
    }
`;

const ProductItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            addWish({
                ...item,
            })
        );
    };

    return (
        <ContainerBig>
            <Container>
                <Wrapper>
                    <Img src={item.img} />
                    <Info>
                        {/* <Icon>
                        <ShoppingCartOutlinedIcon />
                    </Icon> */}
                        <Icon>
                            <Link to={`/product/${item._id}`}>
                                <SearchIcon />
                            </Link>
                        </Icon>
                        <Icon>
                            <FavoriteBorderIcon onClick={handleClick} />
                        </Icon>
                    </Info>
                </Wrapper>
            </Container>
            <SubInfo>
                <Title to={`/product/${item._id}`}>{item.title}</Title>
                <Price>£{item.price}</Price>
            </SubInfo>
        </ContainerBig>
    );
};

ProductItem.propTypes = {
    item: PropTypes.shape({
        img: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
};

export default ProductItem;
