import { AnyAction } from 'redux'
import * as bookActions from '../../actions/book.actions'
import { PAGE_LOADED } from '../../actions/ui.action'
import { Middleware } from './books.middleware'

const pageLoadedFlow: Middleware<any, AnyAction> = ({ log }) => ({
  dispatch,
}) => (next) => (action) => {
  next(action)

  if (action.type === PAGE_LOADED) {
    log('page loaded')
    dispatch(bookActions.loadBooks)
    // dispatch(todosActions.loadMyTodosList)
  }
}

export default [pageLoadedFlow]
