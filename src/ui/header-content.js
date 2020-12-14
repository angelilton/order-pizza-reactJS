import { Grid } from '@material-ui/core'
import React from 'react'
import PropTypes from 'prop-types'

const HeaderContent = ({ children }) => (
  <Grid container direction="column" alignItems="center">
    {children}
  </Grid>
)

HeaderContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeaderContent
