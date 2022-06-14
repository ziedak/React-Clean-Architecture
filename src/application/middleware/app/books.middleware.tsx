import type { AnyAction, Dispatch } from 'redux'
import { apiAction } from '../../actions/api.actions'
import * as bookActions from '../../actions/book.actions'
import * as uiActions from '../../actions/ui.action'

export interface dispatcherT<S, E extends AnyAction> {
  dispatch: Dispatch<E>
  getState(): S
}

export type Middleware<S, E extends AnyAction> = (
  api: any,
) => (
  dispatcher: dispatcherT<S, E>,
) => (next: Dispatch<E>) => (action: E) => void //ReturnType<Dispatch<E>>;

const loadBooksFlow: Middleware<any, AnyAction> = ({ api }) => ({
  dispatch,
}) => (next) => async (action): Promise<void> => {
  next(action)

  if (action.type === bookActions.LOAD_BOOKS) {
    try {
      dispatch(uiActions.setLoading(true))
      const { url, method, data } = api.books.getAll
      dispatch(
        apiAction(
          url,
          method,
          data,
          (books) => bookActions.loadBooksSuccess(books),
          (error) => bookActions.loadBooksFailure(error),
          'FETCH_BOOKS_DETAILS',
        ),
      )
    } catch (error) {
      dispatch(bookActions.loadBooksFailure(error))
    }
    dispatch(uiActions.setLoading(false))
  }
}

const loadOfferFlow: Middleware<any, AnyAction> = ({ api }) => ({
  dispatch,
  getState,
}) => (next) => async (action): Promise<void> => {
  next(action)

  if (action.type === bookActions.LOAD_OFFERS) {
    try {
      const _myBooks = getState().books.myBooks

      if (_myBooks.length === 0) {
        dispatch(bookActions.loadOffersSuccess([]))
        return
      }
      const ids = _myBooks.map((b: bookActions.MyBook) => b.isbn).join(',')

      const { url, method, data } = api.books.getOffer
      const urlToSend = url.replace('[ids]', ids)

      console.log('urlToSend', urlToSend)
      dispatch(
        apiAction(
          urlToSend,
          method,
          data,
          (offers) => bookActions.loadOffersSuccess(offers.offers),
          (error) => bookActions.loadOffersFailure(error),
          'FETCH_OFFERS_DETAILS',
        ),
      )
    } catch (error) {
      dispatch(bookActions.loadOffersFailure(error))
    }
  }
}

const addBookFlow: Middleware<any, AnyAction> = () => ({
  dispatch,
  getState,
}) => (next) => (action) => {
  if (action.type === bookActions.ADD_BOOK) {
    const _myoldBooksClone = getState().books.myBooks.map(
      (book: bookActions.MyBook) => ({
        ...book,
      }),
    )

    const Book: bookActions.MyBook = action.payload
    // console.log('Book', Book)

    const index = _myoldBooksClone.findIndex(
      (t: bookActions.MyBook) => t.isbn === Book.isbn,
    )
    // console.log('index', index)
    if (index > -1) {
      _myoldBooksClone[index].count += 1
    } else {
      const newBook = { ...Book, count: 1 }
      _myoldBooksClone.push(newBook)
    }

    dispatch(bookActions.setMyBooks(_myoldBooksClone))
    dispatch(bookActions.loadOffers)
  }

  next(action)
}

const deleteBookFlow: Middleware<any, AnyAction> = () => ({
  dispatch,
  getState,
}) => (next) => (action) => {
  if (action.type === bookActions.DELETE_BOOK) {
    let _myoldBooksClone = getState().books.myBooks.map(
      (book: bookActions.MyBook) => ({
        ...book,
      }),
    )

    const BookToDelete = action.payload

    const index = _myoldBooksClone.findIndex(
      (t: bookActions.MyBook) => BookToDelete.isbn === t.isbn,
    )

    if (_myoldBooksClone[index].count === 1) {
      _myoldBooksClone = _myoldBooksClone.filter(
        (t: bookActions.MyBook) => BookToDelete.isbn !== t.isbn,
      )
    } else {
      _myoldBooksClone[index].count -= 1
    }
    dispatch(bookActions.setMyBooks(_myoldBooksClone))
    dispatch(bookActions.loadOffers)
  }

  next(action)
}
export default [loadBooksFlow, loadOfferFlow, addBookFlow, deleteBookFlow]
