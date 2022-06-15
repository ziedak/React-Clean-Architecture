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
      {loading ? 'Loading Books...' : <ProductFeed products={books} />}
    </div>
  )
}

export default Home
