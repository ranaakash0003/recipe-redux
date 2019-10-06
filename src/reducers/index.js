import { SET_RECIPES, FAVOURITE_RECIPIE } from '../actions/index'
import { combineReducers } from 'redux'

function recipes(state = [], action) {
    switch (action.type) {
        case SET_RECIPES:
            return [...action.items];
        
        default:
            return state;
    }
}

function favouriteRecipe(state = [], action){
    switch (action.type) {
        case FAVOURITE_RECIPIE:
            return [...state, action.recipe];
        
        default:
            return state;
    }
}

const rootReducer = combineReducers( {recipes, favouriteRecipe });

export default rootReducer;