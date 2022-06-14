export const LOAD_BOOKS = '[books] load'
export const LOAD_BOOKS_SUCCESS = '[books] load success'
export const LOAD_BOOKS_FAILURE = '[books] load failure'

export const LOAD_OFFERS = '[offers] load'
export const LOAD_OFFERS_SUCCESS = '[offers] load success'
export const LOAD_OFFERS_FAILURE = '[offers] load failure'

export const LOAD_MY_BOOKS = '[tods] load my list'
export const SET_MY_BOOKS = '[tods] set my list'
export const ADD_BOOK = '[books] add'
export const DELETE_BOOK = '[books] delete'

export interface Book {
  isbn: string
  title: string
  price: number
  cover: string
  synopsis: [string]
}
// export interface Book {
//   id: number
//   title: string
// }
export type MyBook = Book & { count: 0 }

export interface Offer {
  type: string
  sliceValue?: number
  value: number
}

export interface actionResult<T> {
  type: string
  payload: T
}

export const loadBooks = {
  type: LOAD_BOOKS,
}

export const loadBooksSuccess = (books: [Book]) => ({
  type: LOAD_BOOKS_SUCCESS,
  payload: books,
})

export const loadBooksFailure = (error: any) => ({
  type: LOAD_BOOKS_FAILURE,
  payload: error,
})

export const loadOffers = {
  type: LOAD_OFFERS,
}

export const loadOffersSuccess = (offer: [Offer] | []) => ({
  type: LOAD_OFFERS_SUCCESS,
  payload: offer,
})

export const loadOffersFailure = (error: any) => ({
  type: LOAD_OFFERS_FAILURE,
  payload: error,
})

export const loadMyBooksList = {
  type: LOAD_MY_BOOKS,
}

export const getMyBooksList = (books: [Book]) => ({
  type: LOAD_MY_BOOKS,
  payload: books,
})

export const setMyBooks = (books: [MyBook]) => ({
  type: SET_MY_BOOKS,
  payload: books,
})
export const addBook = (book: Book) => ({
  type: ADD_BOOK,
  payload: book,
})

export const deleteBook = (book: Book) => ({
  type: DELETE_BOOK,
  payload: book,
})
