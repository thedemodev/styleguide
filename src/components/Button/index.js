import React from 'react'
import {css, merge, simulate} from 'glamor'
import * as colors from '../../theme/colors'

const fieldStyle = css({
  outline: 'none',
  verticalAlign: 'bottom',
  padding: '10px 30px 10px 30px',
  minWidth: 200,
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: 22,
  height: 60,
  boxSizing: 'border-box',
  backgroundColor: '#fff',
  border: `1px solid ${colors.primary}`,
  color: colors.primary,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: colors.primary,
    color: '#fff'
  },
  ':active': {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary,
    color: '#fff'
  },
  ':disabled, [disabled]': {
    backgroundColor: '#fff',
    color: colors.disabled,
    borderColor: colors.disabled,
    cursor: 'default'
  }
})
const primaryStyle = css({
  backgroundColor: colors.primary,
  color: '#fff',
  ':hover': {
    backgroundColor: colors.secondary,
    borderColor: colors.secondary
  },
  ':active': {
    backgroundColor: '#000',
    borderColor: '#000',
    color: '#fff'
  }
})
const bigStyle = css({
  display: 'block',
  width: '100%',
  fontSize: 22,
  height: 80,
  padding: '10px 30px 10px 30px'
})

const Button = ({onClick, type, children, primary, big, disabled, simulate: sim}) => {
  const simulations = sim ? simulate(sim) : {}
  const style = merge(fieldStyle, primary && primaryStyle, big && bigStyle)

  return (
    <button onClick={onClick} type={type} disabled={disabled}
      {...style}
      {...simulations}>
      {children}
    </button>
  )
}

export default Button
