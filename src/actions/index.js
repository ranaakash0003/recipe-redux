export const SET_RECIPES = 'SET_RECIPES';
export const FAVOURITE_RECIPIE = 'FAVOURITE_RECIPIE';

export function setRecipes(items) {
    return {
        type: SET_RECIPES,
        items: items
    }
}

export function favoriteRecipe(recipe) {
    return {
        type: FAVOURITE_RECIPIE,
        recipe: recipe
    }
}