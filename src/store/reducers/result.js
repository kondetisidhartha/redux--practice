import * as actionTypes from '../actions/actionTypes'

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // concat is used because it is not inline, whereas .push is inline, which must be avoided
        results: state.results.concat({ id: new Date(), value: action.result })
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