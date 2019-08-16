import { css } from 'glamor'
import PropTypes from 'prop-types'
import React from 'react'

const styles = css({
  margin: '0 -15px 0 -15px',
  padding: '0 15px 0 15px',
  width: 'auto',
  display: 'flex',
  flexDirection: 'row',
  overflowX: 'scroll',
  flexWrap: 'nowrap',
  scrollbarWidth: 'none' /* Firefox */,
  msOverflowStyle: 'none' /* IE 10+ */,
  WebkitOverflowScrolling: 'touch',
  '&::-webkit-scrollbar': {
    width: 0,
    height: 0
  }
})

export const Row = ({ children }) => {
  return (
    <div role="group" {...styles}>
      {children}
    </div>
  )
}

export default Row

Row.propTypes = {
  children: PropTypes.node
}
