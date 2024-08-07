import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/apiCalls'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Container = styled.div`
/* background-color: orange; */
align-self: center;
height: 100px;
width: 100%;
z-index: 100;
`

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

const TopNav = styled.div`
/* background-color: brown; */
height: 55px;
padding: 0px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`

// ----------------------------------LEFT--------------------------
const Left = styled.div`
/* background-color: pink; */
flex:1;
text-align: center;

@media screen and (max-width: 414px){
    flex: calc(2/5);
}
`

const Logo = styled(Link)`
text-decoration: none;
color: #CBBA9C;
font-style: italic;
letter-spacing: 8px;
font-weight: 600;
font-size: clamp(1.2rem, 5vw, 2rem);
cursor: pointer;

@media screen and (max-width: 414px){
letter-spacing: 1px;
}
`

const Span = styled.span`
color: black;
`

//  -------------------------------RIGHT--------------------
const Right = styled.div`
/* background-color: blue; */
flex:1;
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 414px){
    flex: calc(3/5);
}
`

const Language = styled.span`
font-size: 14px;
cursor: pointer;

${mobile({
    display: "none"
})};
`

const SearchContainer = styled.form`
/* background-color: purple; */
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 2px 7px;
`

const Input = styled.input`
border: none;
outline: none;
padding: 4px 4px;

@media screen and (max-width: 780px) {
    width: 30px;
}
`
const SignInWrapTop = styled.div`
/* background-color: yellow; */
display: flex;
justify-content: center;
/* width: 100%; */

@media screen and (max-width: 780px) {
    display: none;
}
`

const MenuItemSignIn = styled(Link)`
display: flex; 
align-items: center;
justify-content: center;
font-size: 14px;
text-decoration: none;
font-style: italic;
color: black;
margin-left: 15px;
height: 50px;
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover {
    transition: 0.2s ease-in-out;
    color: #CBBA9C;
}

@media screen and (max-width: 780px) {
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: #CBBA9C;
    border: 2px solid #CBBA9C;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    height: 60px;
    margin: 0;
    width: 50%;
    outline: 2px solid transparent;
    outline-offset: -7px;

    &:hover {
    background-color: black;
    color: white;
    border: 2px solid black;
    outline: 2px solid #CBBA9C;
    outline-offset: -7px;
    transition: 0.3s ease-in-out;
    }
}
`

const MenuItemLogout = styled.div`
display: flex; 
align-items: center;
justify-content: center;
font-size: 14px;
text-decoration: none;
font-style: italic;
color: black;
margin-left: 15px;
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover {
    transition: 0.2s ease-in-out;
    color: #CBBA9C;
}
@media screen and (max-width: 780px) {
    display: flex; 
    align-items: center;
    justify-content: center;
    background-color: #CBBA9C;
    border: 2px solid #CBBA9C;
    font-size: 18px;
    font-weight: 300;
    font-style: normal;
    height: 60px;
    margin: 0;
    width: 50%;
    outline: 2px solid transparent;
    outline-offset: -7px;

    &:hover {
    background-color: black;
    color: white;
    border: 2px solid black;
    outline: 2px solid #CBBA9C;
    outline-offset: -7px;
    transition: 0.3s ease-in-out;
    }
}
`

const MenuItemBadge = styled(Link)`
/* border: 3px solid pink; */
display: flex; 
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 300;
text-decoration: none;
color: black;
margin-left: 15px;
height: 50px;
cursor: pointer;
`

// --------------------------BOTTOM------------------------
const BottomNav = styled.div`
background-color: black;
height: 45px;
display: flex;
align-items: center;
justify-content: center;
`
 
const MobileIcon = styled.div`
display: none;

@media screen and (max-width:780px) {
    /* background-color: green; */
    color: white;
    display:flex;
    font-weight: 300;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
`

const MenuItemWrapper = styled.div`
/* background-color: orange; */
height: 100%;

display: flex;
align-items: center;

@media screen and (max-width:780px) {
    background-color: white;
    position: fixed;
    z-index: 99;
    min-width: 280px;
    max-width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    top: 0;
    right: ${({isOpen}) => (isOpen ? '0' : '-1000px')};
    transition: 0.3s ease-in-out;
}
`

const CloseIconWrap = styled.div`
display: none; 

@media screen and (max-width:780px) {
    /* background-color: yellow; */
    display:flex;
    align-items: center;
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    outline: none;
    color: black;
    cursor: pointer;
}
`

const MenuItemLinks = styled.div`
display: flex;
align-items: center;

@media screen and (max-width: 780px) {
    /* background-color: blue; */
    width: 100%;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 60px);
}
`

const MenuItem = styled(Link)`
/* border: 3px solid pink; */ 
width: 5rem;
display: flex; 
align-items: center;
justify-content: center;
font-size: clamp(14px, 2vw, 1rem);
font-weight: 300;
text-transform: uppercase;
text-decoration: none;
color: white;
margin: 0 15px;
height: 45px;
transition: 0.2s ease-in-out;
cursor: pointer;

&:hover {
    transition: 0.2s ease-in-out;
    color: #CBBA9C;
}

@media screen and (max-width: 780px) {
    border-bottom: 2px solid #F0F0F0;
    color: black;
    font-size: 18px;
    height: 100%;
    width: 100%;
    margin: 0;
    transition: 0.2s ease-in-out;

    &:hover {
    color: black;
    background-color: #CBBA9C;
    transition: 0.2s ease-in-out;
    }
}
`

const SignInWrapBottom = styled.div`
display: none;

@media screen and (max-width: 780px) {
    /* background-color: yellow; */
    display: flex;
    justify-content: center;
    width: 100%;
}
`

const DividerLine = styled.div`
height: 20px;
width: 2px;
background-color: white;

@media screen and (max-width: 780px) {
display: none;
}
`

const Navbar = () => {

    const quantity = useSelector(state => state.cart.quantity)

    const quantityWish = useSelector(state => state.wish.quantity)

    // console.log(quantity)
    const user = useSelector(state => state.user.currentUser);

    const dispatch = useDispatch()

    const handleLogout = (e) => {
        e.preventDefault();       
        logout(dispatch, user);
    }

    const navigate = useNavigate()

    const [category, setCategory] = useState("")

    // const category = location.pathname.split("/")[2]

    const getProducts = () => {
        //fetch(`http://localhost:5000/api/products?category=${category}`)
        fetch(`https://zarosen-store-to-push-backend.vercel.app/api/products?category=${category}`)   
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setProducts(data);
    //     }
    //   )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getProducts();
        navigate(`/products/${category}`)
    }

    const[isOpen, setIsOpen] =useState(false)
    
    const toggle = () => {
      setIsOpen(!isOpen) 
    }


    return (
        <Container >
            <Wrapper>
                <TopNav>
                    <Left>
                        <Logo to="/">Zaro<Span>sen</Span></Logo>
                    </Left>
                    <Right>
                        <Language>
                            ENG
                        </Language>
                        <SearchContainer onSubmit={handleSubmit}>
                            <Input onChange={e => setCategory(e.target.value)}/>
                            <SearchIcon color="action" style={{fontSize: "18px"}}/>
                        </SearchContainer>
                        <SignInWrapTop>
                        {!user ? (
                            <MenuItemSignIn to="/login">
                                Sign In
                            </MenuItemSignIn>
                        ) : (
                            <MenuItemLogout onClick={handleLogout}>
                                Log Out
                            </MenuItemLogout>
                        )
                        }
                        </SignInWrapTop>
                        <MenuItemBadge to="/wish">
                            <Badge badgeContent={quantityWish} color="primary">
                                <FavoriteBorderIcon color="action" />
                            </Badge>
                        </MenuItemBadge>
                        <MenuItemBadge to="/cart">
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon color="action" />
                            </Badge>
                        </MenuItemBadge>
                    </Right>
                </TopNav>
     {/* ---------------------BOTTOM NAV------------------- */}
                <BottomNav>
                    <MobileIcon onClick={toggle}>
                        <MenuIcon 
                            style={{
                                fontSize: "2rem", 
                                margin:"0 5px", 
                                color:"white"
                                }}/> Menu
                    </MobileIcon>
                    <MenuItemWrapper isOpen={isOpen} onClick={toggle}>
                        <CloseIconWrap>
                            <CloseIcon style={{fontSize: "2rem"}}/>
                        </CloseIconWrap>
                        <MenuItemLinks>
                            <MenuItem to="/products/men">
                                Men
                            </MenuItem>
                            <DividerLine></DividerLine>
                            <MenuItem to="/products/women">
                                Women
                            </MenuItem>
                            <DividerLine></DividerLine>
                            <MenuItem to="/blogs">
                                Blogs
                            </MenuItem>
                            {/* <DividerLine></DividerLine> */}
                            {/* <MenuItem to="/your-orders">
                                Ordered
                            </MenuItem> */}
                        </MenuItemLinks>
                        <SignInWrapBottom>
                        {!user ? (
                        <MenuItemSignIn to="/login">
                            Sign In
                        </MenuItemSignIn>
                    ) : (
                        <MenuItemLogout onClick={handleLogout}>
                            Log Out
                        </MenuItemLogout>
                    )
                    }
                    </SignInWrapBottom>
                    </MenuItemWrapper>
                </BottomNav>
            </Wrapper>
        </Container>
    )
}

export default Navbar
