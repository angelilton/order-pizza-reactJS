import React, { useState, useRef, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import { Grid, CircularProgress } from '@material-ui/core'
import TextField from './text-field'

function FormAddress({ onUpdate = () => {} }) {
  const [cep, setCep] = useState('')
  const [addressState, dispatch] = useReducer(reducer, initialState)
  const [loading, setLoading] = useState(false)
  const numberField = useRef()
  const addressField = useRef()

  useEffect(() => {
    onUpdate(addressState)
  }, [addressState, onUpdate])

  useEffect(() => {
    async function fetchAddress() {
      if (cep.length < 9) {
        return
      }

      setLoading(true)
      const data = await fetch(`https://ws.apicep.com/cep/${cep}.json`)
      setLoading(false)

      //validate if data get error 500
      if (!data.ok) {
        dispatch({ type: 'RESET' })
        addressField.current.focus()
        return
      }

      const result = await data.json()

      //validate if result coming with error, set addressState.error
      if (!result.ok) {
        dispatch({
          type: 'FAIL',
          data: {
            error: result.message
          }
        })
        return
      }

      //set addressState
      dispatch({
        type: 'UPDATE_FULL_ADDRESS',
        data: result
      })

      numberField.current.focus()
    }

    fetchAddress()
  }, [cep])

  const handleChangeCep = (e) => {
    setCep(cepMask(e.target.value))
  }

  const handleChangeField = (e) => {
    const { name, value } = e.target
    dispatch({
      type: 'UPDATE_FIELD',
      data: { name, value }
    })
  }

  function cepMask(value) {
    return value
      .replace(/\D+/g, '')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{3})\d+?$/, '$1')
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <TextField
        label="CEP"
        value={cep}
        xs={4}
        autoFocus
        onChange={handleChangeCep}
        error={!!addressState.error}
      />
      <Grid item xs={6}>
        {loading && <CircularProgress size={20} />}
        {!!addressState.error && <span>{addressState.error}</span>}
      </Grid>

      {[
        {
          label: 'Rua',
          xs: 9,
          name: 'address',
          inputRef: addressField
        },

        {
          label: 'Número',
          xs: 3,
          name: 'number',
          inputRef: numberField
        },

        {
          label: 'Complemento',
          xs: 12,
          name: 'complement'
        },
        {
          label: 'Bairro',
          xs: 6,
          name: 'district'
        },
        {
          label: 'Cidade',
          xs: 4,
          name: 'city'
        },

        {
          label: 'UF',
          xs: 2,
          name: 'state'
        }
      ].map((field) => (
        <TextField
          key={field.name}
          {...field}
          value={addressState[field.name]}
          onChange={handleChangeField}
          disabled={loading}
        />
      ))}
    </Grid>
  )
}

FormAddress.propTypes = {
  onUpdate: PropTypes.func
}

const reducer = (state, action) => {
  if (action.type === 'UPDATE_FULL_ADDRESS') {
    return {
      ...state,
      ...action.data,
      error: null
    }
  }

  if (action.type === 'UPDATE_FIELD') {
    return {
      ...state,
      [action.data.name]: action.data.value
    }
  }

  if (action.type === 'FAIL') {
    return {
      ...initialState,
      error: action.data.error
    }
  }

  if (action.type === 'RESET') {
    return initialState
  }

  return state
}

const initialState = {
  code: '',
  address: '',
  number: '',
  district: '',
  complement: '',
  city: '',
  state: '',
  error: null
}

export default FormAddress
