import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 25px;
background-color: black;
color: white;
display: flex;
justify-content: center;
align-items: center;
`

const P = styled.p`
font-size: clamp(0.6rem, 3vw, 0.8rem);
font-weight: 400;
text-align: center;
`

const Announcement = () => {
    return (
        <Container>
            <P>Summer Deal! Free Shipping Worldwide for Orders Over 300£</P>
        </Container>
    )
}

export default Announcement
