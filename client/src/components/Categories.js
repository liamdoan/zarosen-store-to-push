import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem';
import { categories } from './Data';
import { mobile } from '../Responsive';

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;  
/* padding: 1rem 0; */
background-color: black;
max-height: 80vh;
overflow: hidden;

/* ${mobile({
    padding:"5px", 
    flexDirection: "column"
})}; */
` 

const Categories = () => {
    return (
        <Container>
            {categories.map(item => (
                <CategoryItem key={item.id} item={item}/>
            ))}
        </Container>
    )
}

export default Categories
