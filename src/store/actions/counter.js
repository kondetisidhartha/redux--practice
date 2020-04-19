import * as actionTypes from './actionTypes'

export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  }
}

export const add10 = (value) => {
  return {
    type: actionTypes.ADD10,
    value: value
  }
}

export const subtract5 = () => {
  return {
    type: actionTypes.SUBTRACT5
  }
}