import { AnyAction } from 'redux'
import {
  Book,
  LOAD_BOOKS_FAILURE,
  LOAD_BOOKS_SUCCESS,
  LOAD_MY_BOOKS,
  LOAD_OFFERS_FAILURE,
  LOAD_OFFERS_SUCCESS,
  MyBook,
  Offer,
  SET_MY_BOOKS,
} from '../actions/book.actions'

export interface BOOKState<T> {
  allBooks?: [Book] | []
  myBooks?: [MyBook] | []
  offers?: [Offer] | []
  error?: T
}
const initialState: BOOKState<any> = {
  allBooks: [],
  myBooks: [],
  offers: [],
  error: null,
}

const reducer = (state = initialState, action: AnyAction) => {
  // console.log('action.type', action.type)
  // console.log('action.payload', action.payload)
  switch (action.type) {
    case LOAD_BOOKS_SUCCESS:
      return { ...state, allBooks: action.payload }
    case LOAD_OFFERS_SUCCESS:
      return { ...state, offers: action.payload }
    case LOAD_BOOKS_FAILURE:
    case LOAD_OFFERS_FAILURE:
      return { ...state, error: action.payload }
    case LOAD_MY_BOOKS:
      return { ...state, myBooks: action.payload }
    case SET_MY_BOOKS:
      return { ...state, myBooks: action.payload }
    // case ADD_BOOK:
    //   return { ...state, myBOOKs: action.payload }
    // case DELETE_BOOK:
    //   return { ...state, myBOOKs: action.payload }
    default:
      return state
  }
}

export default reducer
