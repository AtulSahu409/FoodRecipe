
import React from 'react'
import {Route,Routes} from "react-router-dom"
import Login from '../Components/Login'
import Sign from '../Components/Sign'
import Home from './Home'
import RecipeBook from './RecipeBook'
import RecipeDetails from './RecipeDetails'
import User from './User'
const MainRoter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/recipebook" element={<RecipeBook/>}/>
            <Route path="/recipe/:idMeal" element={<RecipeDetails/>}/>
            <Route path="/signin" element={<Sign/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/user" element={<User/>}/>



        </Routes>
    </div>
  )
}

export default MainRoter