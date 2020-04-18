import * as actionTypes from './actions'

const initialState = {
  counter: 0,
  results: []
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
    case actionTypes.ADD5:
      return {
        ...state,
        counter: state.counter + action.value
      }
    case actionTypes.SUBTRACT5:
      return {
        ...state,
        counter: state.counter - 5
      }
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // concat is used because it is not inline, whereas .push is inline, which must be avoided
        results: state.results.concat({ id: new Date(), value: state.counter })
      }
    case actionTypes.DELETE_RESULT:
      // update array immutably, method - 1
      // const id = 2
      // const newArray = [...state.results];
      // newArray.splice(id, 1)

      //Method - 2
      const newArray = state.results.filter(result => (result.id !== action.resultId))
      return {
        ...state,
        results: newArray
      }

    default:
      return state
  }
}

export default reducer