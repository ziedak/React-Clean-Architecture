import { AnyAction } from 'redux'
import * as uiActions from '../actions/ui.action'
export interface loadingState {
  loading: boolean
}
const initialState: loadingState = {
  loading: true,
}

const uiReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case uiActions.SET_LOADING_ON:
    case uiActions.SET_LOADING_OFF:
      return { ...state, loading: action.payload }
    default:
      return state
  }
}
export default uiReducer
