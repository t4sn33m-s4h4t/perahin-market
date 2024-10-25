import axios from 'axios';

import * as actionTypes from './actionTypes';
import { baseUrl } from '../data/baseUrl';


export const addComment = (dishId, rating, author, comment) => {
  return {
    type: actionTypes.ADD_COMMENT,
    payload: {
      dishId: dishId,
      author: author,
      rating: rating,
      comment: comment,
    },
  };
};


export const loadDishes = (dishes) => ({
  type: actionTypes.LOAD_DISHES,
  payload: dishes,
});

export const dishesLoading = () => ({
  type: actionTypes.DISHES_LOADING,
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading());

  axios.get(baseUrl)
    .then(res => res.data.dishes)
    .then(dishes => dispatch(loadDishes(dishes)))
    
};


