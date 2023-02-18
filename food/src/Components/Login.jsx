import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Box, Button, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import User from "../Pages/User";
const Login = () => {

  const navigate=useNavigate()

const [data,setdata]=useState([])

const [arr,setarr]=useState([])

  const handlechange=(e)=>{
    let name=e.target.name
    let value= e.target.value
    setarr({...arr,[name]:value})
  }
const handle=(e)=>{
  e.preventDefault()
  axios.get("https://nice-rose-dove-suit.cyclic.app/UserDetails")
.then((res)=>{
  setdata(res.data)
  
  navigate("/")
})
  
.catch((err)=>{console.log(err)
  navigate("/")})
console.log(data);
<User data={data}/>
let auth=data.filter(function(v, i) {
  return ((v["Username"] === arr.Username) && v.password === arr.Password);
})
console.log(auth)


}
return (
  <Box>
    

    <Box  boxShadow={"rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;"} mt="10%" m="5% auto"   gap="20px" w="40%" border={"1px solid black"} p="30px">
    <Heading  size={"lg"}>Login</Heading>


    <form  onSubmit={handle} style={{width:"100%"}}>
    <FormControl >
    <FormLabel>Email </FormLabel>
        <Input type="text" placeholder='email' name='Username' onChange={handlechange} />
    </FormControl>
    <FormControl >
    <FormLabel>Password </FormLabel>
        <Input type="password" placeholder='password' name="Password" onChange={handlechange} />
    </FormControl>
    <Button mt={4} colorScheme='teal' type='submit'>
        SIGN IN
    </Button>
    
    <Link to="/signin">
          <h5>
            Dont have an Account? <span> Register</span>
          </h5>
        </Link>
    </form>
    </Box>
</Box>
   
  );
};

export default Login