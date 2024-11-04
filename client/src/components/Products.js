import React from 'react'
import styled from 'styled-components'
// import { favProducts } from './Data'
import ProductItem from './ProductItem'
import { mobile } from '../Responsive'
import { useState, useEffect } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom'

const Container = styled.div`
padding: 0 20px 20px 20px; 
display: flex;
flex-wrap: wrap;
justify-content: center;

${mobile({
    padding:"0px 0",
    margin:"0"
})};
`


const Products = ({category, color, filters, sort}) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const location = useLocation()

    // filtered by categories
    useEffect(() => {
        const getProducts = async () => {
            try{  
                const res = await axios.get(
                    category 
                    ? `https://zarosen-store-to-push-backend.vercel.app/api/products?category=${category}`
                    // ? `http://localhost:5000/api/products?category=${category}`
                    // : color
                    // ? `http://localhost:5000/api/products?color=${color}`
                    : "https://zarosen-store-to-push-backend.vercel.app/api/products"
                    // : "http://localhost:5000/api/products"
                    )
                setProducts(res.data)
            }catch(err) {

            }
        }
        getProducts(); 
    },[category, color]);
 
    useEffect(() => {
        category && setFilteredProducts(
            products.filter(item => 
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                ))
        )
        console.log(products)
    }, [products, category, color, filters]);


    // filtered by sorting
    useEffect (() => {
        if(sort ==="newest") {
            setFilteredProducts(prev => 
                [...prev].sort((a,b)=> a.createdAt - b.createdAt)
            )
        } else if(sort ==="asc") {
            setFilteredProducts(prev => 
                [...prev].sort((a,b)=> a.price - b.price)
            )
        } else {
            setFilteredProducts(prev => 
                [...prev].sort((a,b)=> b.price - a.price)
            )
        }
    }, [sort])
 
    return (
        <Container>
            {category 
                ? filteredProducts.map(item => (
                    <ProductItem key={item._id} item={item} />
                ))
                : location.pathname === "/" 
                ? products.slice(2,8).map(item => (
                    <ProductItem key={item._id} item={item} />
                ))
                : products.map(item => (
                    <ProductItem key={item._id} item={item} />
                ))
            }
        </Container>
    )
}

export default Products
