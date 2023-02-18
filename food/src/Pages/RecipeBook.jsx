import styled from '../Styled/Home.module.css'
import React from 'react'
import { Box, Button, Grid, Heading, Image } from '@chakra-ui/react'

const RecipeBook = () => {
    let getdata=JSON.parse(localStorage.getItem("BooK"))
    console.log(getdata)
  return (
    <Grid  gridTemplateColumns={"repeat(3,1fr)"}  gap="5" >
        { 
        getdata && getdata.map((el)=>{
            return(
                <Box p="10%" className={styled.card}  w="100%"  key={el.idMeal} >
                    
                <Heading m="5%" ml="-34%" size={"s"}>{el.strMeal}</Heading>
                    <Image src={el.strMealThumb} w="80%" h="70%" p="2%"   />
                    
                    
                
                </Box>
            )
        })
    }
    </Grid>
  )
}

export default RecipeBook