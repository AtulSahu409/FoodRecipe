import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios" 

import { Box, Button, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'

const Sign = () => {
  const [arr,setarr]=useState([])
  const navigate=useNavigate()
  const handlechange=(e)=>{
    let name=e.target.name
    let value= e.target.value
    setarr({...arr,[name]:value})

  }
   const handle=(e)=>{
    e.preventDefault()
     axios.post("https://nice-rose-dove-suit.cyclic.app/UserDetails",arr)
    .then((res)=>{console.log(res)})
    .then((res)=>{alert("successfully registered")
    })
    .catch((err)=>{console.log(err)
      navigate("/login")})
    
  }

    
       
   
  return (
   
       <Box >
    
    <Box boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"} mt="10%" m="5% auto"   gap="20px" w="40%" border={"1px solid black"} p="30px">
    <Heading  size={"lg"}>Signup</Heading>

    <form onSubmit={handle} style={{width:"100%"}}>
    <FormControl >
    <FormLabel>Name</FormLabel>
        <Input type='text' name='Username'   onChange={handlechange} />
    </FormControl>
    <FormControl >
    <FormLabel>Email </FormLabel>
        <Input type='text' name="Email"   onChange={handlechange} />
    </FormControl>
    <FormControl >
    <FormLabel>Password </FormLabel>
        <Input type='text' name="Password" onChange={handlechange} />
    </FormControl>
    <Button mt={4} colorScheme='teal' type='submit'>
        SING UP
    </Button>
    <Link to="/Login"><h5>Already have an Account? <span> Register</span></h5></Link>
    </form>
    </Box>
    
    </Box>
        
  )
}

export default Sign