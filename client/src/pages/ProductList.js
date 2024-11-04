import React, { useState } from 'react'
import styled from 'styled-components'
import Products from '../components/Products'
import { mobile } from '../Responsive'
import { useLocation } from 'react-router-dom'

const Container = styled.div`
margin: 2rem 0;
`

const Title = styled.h1`
padding: 1.5rem 3rem;
text-transform: uppercase;
font-weight: 400;
font-style: italic;

@media screen and (max-width: 640px){
    padding: 1.5rem 1rem;
}
`

const FilterContainer = styled.div`
padding: 0 3rem;
display: flex;
justify-content: space-between;

@media screen and (max-width: 640px){
    padding: 0 1rem;
}
`

const Filter = styled.div`
margin: 1rem 0;

${mobile({
    display:"flex",
    flexDirection:"column"
})};
`

const FilterText = styled.span`
font-size: 1rem;
margin-right: 5px;
`

const Select = styled.select`
 padding: 5px;
 margin: 5px;

 ${mobile({
    margin:"10px 5px"
})};
` 

const Option = styled.option`
`
 
const ProductList = () => {
    const location = useLocation();
    const category = location.pathname.split("/")[2]
    // const color = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        })
    }

    return (
        <Container>
            {/* PRODUCT LIST PAGES */}
            <Title>{category}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText> 
                        Filter:
                    </FilterText>
                    { 
                        (category === "boots") 
                        ? (
                            <>
                                <Select name="color" onChange={handleFilters}>
                                    <Option disabled>Color </Option>
                                    <Option>white</Option>
                                    <Option>black</Option>
                                    <Option>brown</Option>
                                    <Option>red</Option>
                                    <Option>blue</Option>
                                    <Option>yellow</Option>
                                    <Option>green</Option>
                                    <Option>gray</Option>
                                    <Option>beige</Option>
                                    <Option>pink</Option>
                                </Select>
                                <Select name="size" onChange={handleFilters}>
                                    <Option disabled >Size </Option>
                                    <Option>36</Option>
                                    <Option>37</Option>
                                    <Option>38</Option>
                                    <Option>39</Option>
                                    <Option>40</Option>
                                    <Option>42</Option>
                                    <Option>43</Option>
                                    <Option>44</Option>
                                    <Option>45</Option>
                                    <Option>46</Option>
                                    <Option>47</Option>
                                    <Option>48</Option>
                                    <Option>49</Option>
                                </Select>
                            </>
                        ) 
                    : location.pathname === "/products"
                    ? (
                        <>
                            <Select name="color" onChange={handleFilters}>
                                <Option disabled>Color </Option>
                                <Option>white</Option>
                                <Option>black</Option>
                                <Option>brown</Option>
                                <Option>red</Option>
                                <Option>blue</Option>
                                <Option>yellow</Option>
                                <Option>green</Option>
                                <Option>gray</Option>
                                <Option>beige</Option>
                                <Option>pink</Option> 
                            </Select>
                            <Select name="size" onChange={handleFilters}>
                                <Option disabled>Size </Option>
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                                <Option>XXL</Option>
                            </Select>
                            <Select name="size" onChange={handleFilters}>
                                <Option disabled>Size </Option>
                                <Option>36</Option>
                                <Option>37</Option>
                                <Option>38</Option>
                                <Option>39</Option>
                                <Option>40</Option>
                                <Option>42</Option>
                                <Option>43</Option>
                                <Option>44</Option>
                                <Option>45</Option>
                                <Option>46</Option>
                                <Option>47</Option>
                                <Option>48</Option>
                                <Option>49</Option>
                            </Select>
                        </>
                    ) 
                    : 
                    (
                        <>
                            <Select name="color" onChange={handleFilters}>
                                <Option disabled>Color </Option>
                                <Option>white</Option>
                                <Option>black</Option>
                                <Option>brown</Option>
                                <Option>red</Option>
                                <Option>blue</Option>
                                <Option>yellow</Option>
                                <Option>green</Option>
                                <Option>gray</Option>
                                <Option>beige</Option>
                                <Option>pink</Option>
                            </Select>
                            <Select name="size" onChange={handleFilters}>
                                <Option disabled >Size </Option>
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                                <Option>XXL</Option>
                            </Select>
                        </>
                    )
                } 
                </Filter> 
                <Filter>
                    <FilterText>
                        Products:
                    </FilterText>
                    <Select onChange={e => setSort(e.target.value)}> 
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer> 
            <Products 
                category={category} 
                // color={color} 
                filters={filters}
                sort={sort}/>
        </Container>
    )
}

export default ProductList
