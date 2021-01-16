import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'
import { uniqueID } from 'utils'

export const OrderContext = createContext()

const Order = ({ children }) => {
  const [pizzas, setPizzas] = useState([])
  const [phone, addPhone] = useState('')
  const [address, addAddress] = useState({})

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
    setPizzas((pizzas) => pizzas.filter((p) => p.id !== id))
  }

  return (
    <OrderContext.Provider
      value={{
        order: {
          pizzas,
          address,
          phone
        },
        addPizzaToOrder,
        removePizzaFromOrder,
        addAddress,
        addPhone
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
