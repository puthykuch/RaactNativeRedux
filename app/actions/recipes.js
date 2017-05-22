import * as types from './types';
import Api from '../lib/api'

export function fetchRecipes(ingredients) {
  return (dispatch, getState) => {
    const params = [
      `i=${encodeURIComponent(ingredients)}`
    ].join('&');    
    return Api.get(`?${params}`).then(resp => {
      console.log(resp);
    }).catch( (ex) => {
      console.log(ex);  
    })
  }
}

export function addRecipe() {
  return {
    type: types.ADD_RECIPE,
  }
}