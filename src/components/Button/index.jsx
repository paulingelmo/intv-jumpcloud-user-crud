import React from 'react'
import cx from 'classnames'
// import styles from './Button.m.sass'

const Button = ({ classnames, type = 'button', onclick, children }) => {
  return (
    <button className={cx(classnames)} type={type} onClick={onclick}>
      {children}
    </button>
  )
}

export default Button
