import React, { Component, useEffect, useState } from 'react'
import Recipe from './Recipe';
import style from './recipe.module.css'


function App() {

    const APP_ID = "1cf2bb78";
    const APP_KEY = "d7765c2b2d33700985dfa854ee9b013c";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken')

    const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

    useEffect(() => {
        getRecipes()
        console.log(URL)
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setRecipes(data.hits)
        console.log(data.hits)
    }

    const updatesearch = e => {
        setSearch(e.target.value)
        console.log(search)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch("")
    }

    return (
        <div className="app">

            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updatesearch} />
                <button className='search-button' type="submit">Search</button>
            </form>
            <div className="recipes">

            {
                recipes.map(recipe => (
                    <Recipe ingredients={recipe.recipe.ingredients} title={recipe.recipe.label} calories={recipe.recipe.calories} imgsrc={recipe.recipe.image} />
                ))
            }
            </div>
        </div>
        
    )

}

export default App;
