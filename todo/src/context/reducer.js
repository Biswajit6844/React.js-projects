import { ADD_TODO, REMOVE_TODO } from "./action.types";


//2. creating the functions to be used 
export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload);

    default:
      return state;
  }
};

//2. creating the functions to be used 

//3.generating ids (in app.js)

