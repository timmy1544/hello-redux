// store
import { createStore } from 'redux';
import reducer from 'reducer';
const initailState = {
  tech: 'react'
};
const store = createStore(reducer, initailState);
export default store;

//reducer
const reducer = (state, action) => {
  switch(action.type) {
    case('SET_TECHNOLOGY'):
      return {
        ...state,
        tech:action.tech
    }
    default:
      return state;
  }
}
export default reducer

// action
const setTechnology = (tech) => {
  return {
    type: 'SET_TECHNOLOGY',
    tech: tech
  }
}
export default setTechnology;
