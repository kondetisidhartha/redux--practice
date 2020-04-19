import * as actionTypes from '../actions/actionTypes'

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      }
    case actionTypes.ADD10:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT5:
      return {
        ...state,
        counter: state.counter - 5
      }
    default:
      return state
  }
}

export default reducer