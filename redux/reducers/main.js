import * as t from "../types";

const main = (state = {}, action) => {
  switch(action.type){
    case t.FIRST_TYPE_GOES_HERE:
      return { 
        ...state,
        name: action.payload
      };
    default:
      return {...state};
    }
}

export default main;
