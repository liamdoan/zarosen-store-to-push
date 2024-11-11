import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Payment from "../images/payment.png"
import { Link } from 'react-router-dom';
import LogoImg from "../images/logo.png"
import { animateScroll as scroll} from 'react-scroll'

const Container = styled.div`
width: 100%;
`

// LOGO
const Logo = styled.div`
position: relative;
margin: 3rem 0 0 0;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`

const Img = styled.img`
align-self: center;
padding: 5px;
width: 15%;
min-width: 180px;
height: auto;
`

const LogoName = styled.p`
position: absolute;
top:50%;
font-size: clamp(1rem, 2.1vw, 4rem);
text-transform: uppercase;
font-weight: 600;
font-style: italic;
letter-spacing: 8px;
left: 50%;;
color: #CBBA9C;
transform: translate(-50%, -37%);
`

const LogoSpan = styled.span`
color: black;
`


const InfoContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 3rem 0;

@media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
}
`

// LEFT
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 0 20px;
margin-bottom: 2.5rem;
border-right: 1px solid #d1d1d1;

@media screen and (max-width: 320px){
    padding: 0;
}
`

const Title = styled.p`
text-transform: uppercase;
font-size: 1.5rem;
color: #CBBA9C;
font-weight: 600;
text-align: center;
height: 40px;
margin-bottom: 1rem;
`

const Description = styled.p`
font-size: 12.5px;
text-align: center;
margin: 0 1rem 14px 1rem;
font-weight: 300;
`

const SocialContainer = styled.div`
display: flex;
justify-content: center;
`

const SocialIcon = styled.a`
margin: 5px 5px;
width: 40px;
height: 40px;
border: 1px solid #CBBA9C;
display: flex;
justify-content: center;
align-items: center;
color: ${({color}) => (color)};
transition: 0.3s ease-in-out;

&:hover {
    transform: scale(1.2);
    background-color: #CBBA9C;
    transition: 0.3s ease-in-out;
}
`

// CENTER
const Center = styled.div`
flex: 1;
padding: 0 20px;
border-right: 1px solid #d1d1d1;
margin-bottom: 2.5rem;
`

const LinkWrap = styled.div`
display: flex;
/* grid-template-columns: repeat(2, minmax(80px, 120px)); */
`

const LeftColumn = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`
const RightColumn = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`

const LinkItem = styled(Link)`
width: 90%;
margin: 4px 0px;
font-size: 12px;
font-weight: 300;
text-decoration: none;
color: black;

&:hover {
    color: #CBBA9C;
}
`

// RIGHT
const Right = styled.div`
flex: 1;
padding: 0 20px;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 2.5rem;
`
const ContactItem = styled.p`
display: flex;
justify-content: start;;
align-items: center;
margin: 3px 0;
font-size: 12px;
font-weight: 300;
`

// COPY RIGHT
const CopyRightContainer = styled.div`
min-height: 70px;
background-color: black;
width: 100%;
display: flex;

@media screen and (max-width: 480px) {
    flex-direction: column;
}
`

const CopyRightContent = styled.div`
flex: 1;
display:flex;
justify-content: center;
align-items: center;
padding: 10px 1rem;
`

const P = styled.p`
color: white;
font-size: 12px;
font-weight: 300;

@media screen and (max-width: 480px) {
    text-align: center;
}
`

const PaymentImgContainer = styled.div`
flex: 1;
display:flex;
justify-content: center;
align-items: center;
padding: 10px 1rem;
`

const PaymentImg = styled.img`
min-width: 150px;
max-width: 200px;
height: auto;
`

const Footer = () => {
    const scrollHome = () => {
        scroll.scrollToTop();
    }

    return (
        <Container>
        <Logo onClick={scrollHome}>
            <Img src={LogoImg}/>
            <LogoName>Zaro<LogoSpan>sen</LogoSpan></LogoName>
        </Logo>
        <InfoContainer>
            <Left>
                <Title>
                    Social media
                </Title>
                <Description>
                    Special offer from our social networks
                </Description>
                <SocialContainer>
                    <SocialIcon href="https://www.facebook.com" target="_blank" color="#3b5999"> 
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon  href="https://www.instagram.com" target="_blank" color="#e4405f">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon  href="https://www.twitter.com" target="_blank" color="#55acee">
                        <TwitterIcon/>
                    </SocialIcon>
                    <SocialIcon  href="https://www.pinterest.com" target="_blank" color="#E60023">
                        <PinterestIcon/>
                    </SocialIcon>
                    <SocialIcon  href="https://www.youtube.com" target="_blank" color="#FF0000">
                        <YouTubeIcon/>
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Information</Title>
                <LinkWrap>
                    <LeftColumn>
                        <LinkItem to="/products/men">Men&apos;s Fashion</LinkItem>
                        <LinkItem to="/products/women">Women&apos;s Fashion</LinkItem>
                        <LinkItem to="/">Accessories</LinkItem>
                    </LeftColumn>
                    <RightColumn>
                        <LinkItem to="/">My Account</LinkItem>
                        <LinkItem to="/">Order Tracking</LinkItem>
                        <LinkItem to="/wish">Wish List</LinkItem>
                        <LinkItem to="/">Terms and Conditions</LinkItem>
                    </RightColumn>
                </LinkWrap>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem> 
                    <PlaceIcon style={{marginRight:"7px", fontSize:"22px"}}/>
                    Abcdekatu 10, 10101, Finland
                </ContactItem>
                <ContactItem> 
                    <PhoneIcon style={{marginRight:"7px", fontSize:"22px"}}/>
                    0123456789
                </ContactItem>
                <ContactItem> 
                    <EmailIcon style={{marginRight:"7px", fontSize:"22px"}}/>
                    contact@zarosen.com
                </ContactItem>
            </Right>
        </InfoContainer>
        <CopyRightContainer>
            <CopyRightContent>
                <P>Copyright &copy; {new Date().getFullYear()}, ABCDEF Powered by VWXYZ</P>
            </CopyRightContent>
            <PaymentImgContainer>
                <PaymentImg src={Payment}/>
            </PaymentImgContainer>
        </CopyRightContainer>
        </Container>
    )
}

export default Footer
