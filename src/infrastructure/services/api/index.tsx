import books, { IRequestRecord } from './books'

export default {
  books,
}

export interface IApi {
  [key: string]: IRequestRecord
}
