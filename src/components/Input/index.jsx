import React from 'react'
import cx from 'classnames'
// import styles from './Input.m.sass'

const Input = ({
  classnames = 'form-control',
  type = 'text',
  value,
  onchange
}) => {
  return (
    <input
      className={cx(classnames)}
      type={type}
      value={value}
      onChange={onchange}
    />
  )
}

export default Input
