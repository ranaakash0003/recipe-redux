import React, { Component } from 'react';
import SearchRecipes from './SearchRecipes';
import RecipieList from './RecipieList'
import '../styles/index.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>Recipe Finder</h2>
                <SearchRecipes/>
                <RecipieList/>
            </div>
        )
    }
}
