import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Products = () => {
  const notAuthenticated = Cookies.get('jwt_token') === undefined

  if (notAuthenticated) {
    return <Redirect to="/login" />
  }

  return (
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
      alt="products"
      className="products-image"
    />
  )
}

export default Products
