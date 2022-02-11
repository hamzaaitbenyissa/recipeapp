import React from 'react';
import style from './recipe.module.css'


function Recipe(props) {

    const title = props.title
    const imgsrc = props.imgsrc
    const calories = props.calories
    const ingredients = props.ingredients

    return (

        <div className={style.recipe}>
            <h1>{title}</h1>
            <img src={imgsrc} className={style.image} alt="" />
            <p>calories : {calories}</p>
            <ul   className={style.list}><span className={style.ingredient}>ingredient :</span> 
                {
                    ingredients.map(ingredient => (
                        <li>{ingredient.text}</li>
                    ))

                }
            </ul>
        </div>
    )

}

export default Recipe;