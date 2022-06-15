import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadOffers } from '../../application/actions/book.actions'
import { pageLoaded } from '../../application/actions/ui.action'
import { getBooks } from '../../application/selectors/books'
import { getLoading } from '../../application/selectors/ui'
import ProductFeed from '../components/productFeed'

const Home = () => {
  const dispatch = useDispatch()
  const books = useSelector(getBooks)
  const loading = useSelector(getLoading)

  useEffect(() => {
    dispatch(pageLoaded)
    dispatch(loadOffers)
  }, [dispatch])

  return (
    <div className="bg-gray-100">
      {/* <h1>offers {offers.length}</h1>
      <ul>
        {offers.map((offer: Offer, i: number) => (
          <li key={i}>
            {offer.sliceValue}
            {offer.type}
            {offer.value}
          </li>
        ))}
      </ul>

      <h1>My Books {myBooks.length}</h1>
      <ul>
        {myBooks.map((book: MyBook) => (
          <li key={book.isbn} onClick={() => dispatch(deleteBook(book))}>
            {book.isbn}
            {book.title}
            ==== {book.count}
          </li>
        ))}
      </ul> */}

      <h1> Books List</h1>
      {loading ? (
        'Loading Books...'
      ) : (
        <>
          {/* <ul>
            {Books.map((book: Book) => (
              <li key={book.isbn} onClick={() => dispatch(addBook(book))}>
                {book.isbn} {book.title}
              </li>
            ))}
          </ul> */}
          <ProductFeed products={books} />
        </>
      )}
    </div>
  )
}

export default Home
