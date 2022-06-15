import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addBook, Book } from '../../application/actions/book.actions'

const Product: React.FC<{ product: Book }> = ({ product }) => {
  const dispatch = useDispatch()

  const { title, price, synopsis, cover } = product

  const addItemToBasket = () => {
    //Sending the product as an action to the REDUX store ..
    dispatch(addBook(product))
  }

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <img
        src={cover}
        height={200}
        width={200}
        className="img-responsive"
        alt=""
      />

      <h4 className="my-3">{title}</h4>

      <p className="text-xs my-2 line-clamp-2">{synopsis}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="EUR" />
      </div>

      <button onClick={() => addItemToBasket()} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  )
}

export default Product
