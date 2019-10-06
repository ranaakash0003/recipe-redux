import React, { Component } from "react"
import { connect } from "react-redux"
import RecipeItem from "./RecipeItem"
import { Link } from 'react-router-dom'

class FavoriteRecipeList extends Component {
  render() {
    return (
      <div>
        <h4><Link to='/'>Home</Link></h4>
        <h4>Favourite Recipe List</h4>
        {
          this.props.favouriteRecipe.map((recipe, index) => {
            return <RecipeItem key={index} recipe={recipe} favoriteButton={false} />
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    favouriteRecipe: state.favouriteRecipe
  }
}

export default connect(
  mapStateToProps,
  null
)(FavoriteRecipeList)
