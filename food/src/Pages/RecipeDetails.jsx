import styled from "../Styled/RecipeDetails.module.css";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
var id="";
const RecipeDetails = () => {
    const [item, setItem] = useState(); 
    const { idMeal } = useParams();
    console.log(idMeal)
    if (idMeal !==" ") {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).then(res => res.json()).then(data => {
            setItem(data.meals[0]);  
        })
    }
    
  

    return (
        <>
            {
                (!item) ? "" : <div className={styled.content}>
                    <h1 className={styled.name}>{item.strMeal}</h1>
                    <img src={item.strMealThumb} alt="" />
                    
                
                    <div className={styled.recipedetails}>
                        <div className={styled.ingredients}>
                            <h2>Ingredients</h2><br />
                            <h4>{item.strIngredient1}:{item.strMeasure1}</h4>
                            <h4>{item.strIngredient2}:{item.strMeasure2}</h4>
                            <h4>{item.strIngredient3}:{item.strMeasure3}</h4>
                            <h4>{item.strIngredient4}:{item.strMeasure4}</h4>
                            <h4>{item.strIngredient5}:{item.strMeasure5}</h4>
                            <h4>{item.strIngredient6}:{item.strMeasure6}</h4>
                            <h4>{item.strIngredient7}:{item.strMeasure7}</h4>
                            <h4>{item.strIngredient8}:{item.strMeasure8}</h4>
                        </div>
                        <div className={styled.instructions}>
                            <h2>Instructions</h2><br />
                            <h4>{item.strInstructions}</h4>
                        </div>
                    </div>
                    

                </div>
            }

        </>
    )
}
export default RecipeDetails