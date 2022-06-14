import { Book } from '../../application/actions/book.actions'
import Product from './product'

const ProductFeed: React.FC<{ products: [Book] }> = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mx-auto">
      {products.map((product) => (
        <Product key={product.isbn} product={product} />
      ))}
    </div>
  )
}

export default ProductFeed
