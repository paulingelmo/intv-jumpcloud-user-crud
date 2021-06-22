import React from 'react'
import Input from 'components/input'
import cx from 'classnames'
import styles from './Form.m.sass'

const Form = ({ children, title, model, onchange }) => {
  return (
    <form className={cx(styles.form, 'mb-3')}>
      <h4 className="pb-1">{title}</h4>
      <div className="input-group mb-3">
        <label className="input-group-text">Email</label>
        <Input
          value={model?.email || ''}
          onchange={(event) => onchange('email', event.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text">First Name</label>
        <Input
          value={model?.firstname || ''}
          onchange={(event) => onchange('firstname', event.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text">Last Name</label>
        <Input
          value={model?.lastname || ''}
          onchange={(event) => onchange('lastname', event.target.value)}
        />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text">Username</label>
        <Input
          value={model?.username || ''}
          onchange={(event) => onchange('username', event.target.value)}
        />
      </div>
      {children}
    </form>
  )
}

export default Form
