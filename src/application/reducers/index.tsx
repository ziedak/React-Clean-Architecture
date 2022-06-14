import { combineReducers } from 'redux'
import books from './books.reducer'
import ui from './ui.reducer'

export default combineReducers({
  ui,
  books,
})
