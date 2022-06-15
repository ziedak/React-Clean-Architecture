import { useEffect } from 'react'
import Currency from 'react-currency-formatter'
import { useDispatch, useSelector } from 'react-redux'
import {
  addBook,
  deleteBook,
  loadOffers,
  MyBook,
} from '../../application/actions/book.actions'
import { getmyBooks, getOffers } from '../../application/selectors/books'
import {
  calculBestPricesAfterReduction,
  calculTotalPrice,
} from '../../lib/priceHelper'
const Cart = () => {
  const dispatch = useDispatch()
  const myBooks = useSelector(getmyBooks)
  const offers = useSelector(getOffers)
  useEffect(() => {
    dispatch(loadOffers)
  }, [dispatch])

  let sum = myBooks.reduce(function (total, currentValue) {
    return total + currentValue.count
  }, 0)

  return (
    <div className="overflow-x-auto w-full m-5">
      <h1>My Books {sum}</h1>
      {/* <ul>
        {myBooks.map((book: MyBook) => (
          <li key={book.isbn} onClick={() => dispatch(deleteBook(book))}>
            {book.isbn}
            {book.title}
            ==== {book.count}
          </li>
        ))}
      </ul> */}
      {myBooks.length > 0 ? (
        <>
          <p className="mx-5">
            Total Price{' '}
            <Currency quantity={calculTotalPrice(myBooks)} currency="EUR" />
          </p>

          <p className="mb-5">
            Price To Pay{' '}
            <Currency
              quantity={calculBestPricesAfterReduction(myBooks, offers)}
              currency="EUR"
            />
          </p>

          <table className="table w-full">
            <thead>
              <tr>
                <th>image</th>
                <th>title</th>
                <th>Price</th>
                <th>Qte</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myBooks.map((book: MyBook) => (
                <tr key={book.isbn}>
                  {/* <td key={book.isbn} onClick={() => dispatch(deleteBook(book))}> */}
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={book.cover} alt="Avatar" />
                      </div>
                    </div>
                  </td>
                  <td>{book.title}</td>
                  <td>{book.price}</td>
                  <td>{book.count} </td>
                  <td>
                    <div className="btn-group">
                      <button
                        className="btn"
                        onClick={() => dispatch(addBook(book))}
                      >
                        +
                      </button>
                      <button
                        className="btn"
                        onClick={() => dispatch(deleteBook(book))}
                      >
                        -
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <h1>offers {offers.length}</h1>
          <ul>
            {offers.map((offer: Offer, i: number) => (
              <li key={i}>
                {offer.type}
                {offer.sliceValue}
                {offer.value}
              </li>
            ))}
          </ul> */}
        </>
      ) : (
        'No books in cart'
      )}
    </div>
  )
}

export default Cart
