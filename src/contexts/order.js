import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const OrderContext = createContext()

const Order = ({ children }) => {
  const [pizzas, setPizzas] = useState([])

  function addPizzaToOrder(pizza) {
    setPizzas([...pizzas, pizza])
  }
  return (
    <OrderContext.Provider
      value={{
        order: {
          pizzas
        },
        addPizzaToOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

Order.propTypes = {
  children: PropTypes.node.isRequired
}

export default Order
