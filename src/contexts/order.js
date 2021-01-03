import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { uniqueID } from 'utils'

export const OrderContext = createContext()

const Order = ({ children }) => {
  const [pizzas, setPizzas] = useState([])

  function addPizzaToOrder(pizza) {
    setPizzas((pizzas) => pizzas.concat(newPizza(pizza)))
  }

  function newPizza(pizza) {
    return {
      id: uniqueID(),
      ...pizza
    }
  }

  function removePizzaFromOrder(id) {
    console.log('removePizzaFromOrder:', id)
    setPizzas((pizzas) => pizzas.filter((p) => p.id !== id))
  }

  return (
    <OrderContext.Provider
      value={{
        order: {
          pizzas
        },
        addPizzaToOrder,
        removePizzaFromOrder
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
