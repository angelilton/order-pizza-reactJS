import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const OrderContext = createContext()

const Order = ({ children }) => {
  return <OrderContext.Provider value={{}}>{children}</OrderContext.Provider>
}

Order.propTypes = {
  children: PropTypes.node.isRequired
}

export default Order
