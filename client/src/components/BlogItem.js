import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom"

const Container = styled.div`
flex: 1;
min-width: 250px;
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 1rem 1rem;
border-bottom: 3px solid #f4f4f4;
transition: 0.3s ease-in-out;

&:hover {
    box-shadow: 0px 10px 20px rgba(0,0,0,0.3);
    transition: 0.3s ease-in-out;
}
`

const ContentWrapper = styled.div``

const ImgContainer = styled.div`
width: 100%;
max-height: 280px;
`

const Img = styled.img`
width: 100%;
height: 280px;
object-fit: cover;
`

const Date = styled.p`
padding: 14px 1rem;
font-size: 12.5px;
`


const Title = styled.div`
padding: 14px 1rem;
text-transform: uppercase;
font-weight: bold;
`
const P =styled(Link)`
text-decoration: none;
color: black;
transition: 0.3s ease-in-out;

&:hover {
    color:#CBBA9C;
    transition: 0.3s ease-in-out;
}
`

const Desc = styled.div`
padding: 14px 1rem;
line-height: 20px;
font-size: 15px;
`

const Button = styled.button`
align-self: center;
width: 160px;
height: 2rem;
margin: 2rem 0 2rem 0;
padding: 20px 0;
text-transform: uppercase;
background-color: transparent;
border: 2px solid #CBBA9C;
outline: 2px solid transparent;
outline-offset: -7px;
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
    outline-offset: -7px;
    transition: 0.3s ease-in-out;
}
`

const BlogItem = ({blog}) => {
  return (
        <Container>
            <ContentWrapper>
                <ImgContainer>
                    <Img src={blog.img}/>
                </ImgContainer>
                <Date>
                    {blog.date}
                </Date>
                <Title>
                    <P to="/">
                    {blog.title}
                    </P>
                </Title>
                <Desc>
                    {blog.description}
                </Desc>
            </ContentWrapper>
            <Button>Read more</Button>
        </Container>
    );
};

BlogItem.propTypes = {
    blog: PropTypes.shape({
        id: PropTypes.number.isRequired,
        img: PropTypes.string,
        date: PropTypes.string,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
    }).isRequired
}

export default BlogItem;
