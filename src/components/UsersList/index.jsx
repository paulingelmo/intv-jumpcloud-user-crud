import React from 'react'
// import styles from './UsersList.m.sass'

export const UsersList = ({ children }) => {
  return (
    <table className="table table-striped table-hover align-middle">
      <thead>
        <tr>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}

export const User = ({ user, children }) => {
  return (
    <tr>
      <td>{user.email}</td>
      <td>{user.firstname}</td>
      <td>{user.lastname}</td>
      <td>{user.username}</td>
      <td>{children}</td>
    </tr>
  )
}
