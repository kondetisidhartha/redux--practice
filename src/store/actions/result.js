import * as actionTypes from './actionTypes'

export const onSaveResult = (result) => {
  return {
    type: actionTypes.STORE_RESULT,
    result: result
  }
}

export const onStoreResult = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log(oldCounter);
      dispatch(onSaveResult(result)) // thunk will dispatch this action after 2s to onSaveResult
    }, 2000);
  }
}

export const onDeleteResult = (id) => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultId: id
  }
}