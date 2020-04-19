export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ADD10 = 'ADD10'
export const SUBTRACT5 = 'SUBTRACT5'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

export const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const add10 = (value) => {
  return {
    type: ADD10,
    value: value
  }
}

export const subtract5 = () => {
  return {
    type: SUBTRACT5
  }
}

export const onStoreResult = (result) => {
  return {
    type: STORE_RESULT,
    result: result
  }
}

export const onDeleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    resultId: id
  }
}