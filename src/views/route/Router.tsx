import * as React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Layout from '../layout'

const Home = React.lazy(() => import('../pages/Home'))
const Cart = React.lazy(() => import('../pages/Cart'))

const NoMatch = () => {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <React.Suspense fallback={<>...</>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="cart/*"
            element={
              <React.Suspense fallback={<>...</>}>
                <Cart />
              </React.Suspense>
            }
          />

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}
