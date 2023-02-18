import { Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import styled from '../Styled/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styled.Container}>
      <Link to="/"><Heading color={"white"} size={"md"}>Home</Heading></Link>
      <Link to="/recipebook"><Heading color={"white"} size={"md"}>Your RecipeBook</Heading></Link>
      <Link to="/user"><Heading color={"white"} size={"md"}>Profile</Heading></Link>
      
      <Link to="/signin"><Heading color={"white"} size={"md"}>SignIn/Login</Heading></Link>


    </div>
  )
}

export default Navbar