import { Box, Button, Grid, Heading, Image, Input, InputGroup, InputLeftElement, InputRightElement, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import styled from '../Styled/Home.module.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdata } from '../Redux/RecipeData/action'
import {Search2Icon} from "@chakra-ui/icons"
import { useNavigate } from 'react-router-dom'
const Home = () => {

    const dispatch=useDispatch()
const data=useSelector((state)=>state.recipedata.recipe)
const isloading=useSelector((state)=>state.recipedata.isLoading)
const iserror=useSelector((state)=>state.recipedata.IsError)
console.log(iserror,isloading)
const navigate=useNavigate()
const [search,setsearch]=useState("")
    console.log(search,iserror,isloading)
const Meals=data.meals

useEffect(()=>{
    dispatch(getdata(search))
},[dispatch,search])

const handle=(id)=>{
navigate(`recipe/${id}`)
}
let arr=[]
const handleclick=(el)=>{
    arr.push(el)
    localStorage.setItem("BooK",JSON.stringify(arr))

}

  return (
    <div>
    <div>
        <InputGroup ml="40%" mt="3%" bg={"white"} color="black" w="350px" h={"10%"} >
            <InputLeftElement
              pointerEvents='none'
              color='gray.300'
              fontSize='1.2em'
              
            />
            <Input  placeholder='Search Recipe here..' borderRadius={"50px"} onChange={(e)=>setsearch(e.target.value)} />
            <InputRightElement bg="yellow" borderRightRadius={"50px"} children={<Search2Icon fontSize={"2xl"} color='green.500' />}  />

            </InputGroup>
    </div>
    
    <div className={styled.Container}>
    {
           
           isloading ? <Box w="500%" h="500%" padding='6' boxShadow='lg' bg='white'>
                       <SkeletonCircle size='30' />
               <SkeletonText mt='4' noOfLines={4} spacing='54' skeletonHeight='4' />
                   </Box>:""
       }
       {
           iserror ? "Something wrong":""
       }

    { 
        Meals && Meals.map((el)=>{
            return(
                <div className={styled.card} key={el.idMeal} >
                    <Image src={el.strMealThumb} w="100%" h="70%" p="2%" onClick={(e)=>handle(el.idMeal)} />
                    <Heading mt="10%" size={"s"}>{el.strMeal}</Heading>
                    <Button onClick={(e)=>handleclick(el)}>ADD TO Book</Button>

                </div>
            )
        })
    }


    </div>
</div>
  )
}

export default Home