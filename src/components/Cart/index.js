import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

const Cart = () => {
  const notAuthenticated = Cookies.get('jwt_token') === undefined

  if (notAuthenticated) {
    return <Redirect to="/login" />
  }

  return (
    <img
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
      alt="cart"
      className="cart-image"
    />
  )
}

export default Cart
