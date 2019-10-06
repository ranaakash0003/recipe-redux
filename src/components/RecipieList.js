import React, { Component } from "react"
import RecipeItem from "./RecipeItem"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

class RecipieList extends Component {
  render() {
    console.log("this.props", this.props.recipes)
    return (
      <div>
        <h4><Link to='/favourites'>Favourites</Link></h4>
        {this.props.recipes.map(recipe => {
          return (
            //   <h4 key={recipe.href}>{recipe.title}</h4>
            <RecipeItem key={recipe.href} recipe={recipe} favoriteButton={true}  />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes:state.recipes
  }
}

export default connect(
  mapStateToProps,
  null
)(RecipieList)
