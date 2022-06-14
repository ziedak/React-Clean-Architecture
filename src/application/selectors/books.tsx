import { Book, MyBook, Offer } from '../actions/book.actions'
import { RootState } from '../store'

export const getBooks = (state: RootState): [Book] => state.books.allBooks
export const getmyBooks = (state: RootState): [MyBook] => state.books.myBooks
export const getOffers = (state: RootState): [Offer] => state.books.offers
