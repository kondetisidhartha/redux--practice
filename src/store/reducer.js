const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const newState = Object.assign({}, state);
      newState.counter = state.counter + 1;
      return newState
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'ADD5':
      return {
        ...state,
        counter: state.counter + action.value
      }
    case 'SUBTRACT5':
      return {
        ...state,
        counter: state.counter - 5
      }
    case 'STORE_RESULT':
      return {
        ...state,
        // concat is used because it is not inline, whereas .push is inline, which must be avoided
        results: state.results.concat({ id: new Date(), value: state.counter })
      }
    case 'DELETE_RESULT':
    // update array immutably

    default:
      return state
  }
}

export default reducer