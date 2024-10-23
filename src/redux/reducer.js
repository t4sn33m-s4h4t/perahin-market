import DISHES from '../data/dishes';
import COMMENTS from '../data/comments';
import { combineReducers } from 'redux';

import { ADD_COMMENT } from './actionTypes';
const dishReducer = (dishState = DISHES, action) =>{
    switch (action.type) {
        
        default:
          return dishState;   
      }
}
const commentReducer = (commentState = COMMENTS, action) =>{
    switch (action.type) {
        case ADD_COMMENT:
          const comment = action.payload;
          comment.id = commentState.length + 1;
          comment.date = new Date().toDateString();   
          return commentState.concat(comment)  

        default:
          return commentState;   
      }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentReducer,
})
