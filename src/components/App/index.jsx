import React, { useState, useEffect } from 'react'
import Header from 'components/Header'
import { UsersList, User } from 'components/UsersList'
import Form from 'components/Form'
import Button from 'components/Button'
import apiUtility from 'api/APIUtility'
// import styles from './App.m.sass'

const App = () => {
  const [users, setUsers] = useState([])
  const [modifyPanelOpen, setModifyPanelOpen] = useState(false)
  const [createUserData, setCreateUserData] = useState(() => resetUserData)
  const [currentUserData, setCurrentUserData] = useState(() => resetUserData)

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = () => {
    apiUtility()
      .getUsers()
      .then((response) => {
        setUsers(response.data.results)
      })
  }

  const createUser = (userData) => {
    apiUtility()
      .createUser(userData)
      .then(() => {
        setCreateUserData(resetUserData())
        getUsers()
      })
  }

  const editUser = (userData) => {
    apiUtility()
      .editUser(userData.id, userData)
      .then(() => {
        setCurrentUserData(resetUserData())
        setModifyPanelOpen(false)
        getUsers()
      })
  }

  const deleteUser = (userData) => {
    apiUtility()
      .deleteUser(userData.id)
      .then(() => {
        setCurrentUserData(resetUserData())
        setModifyPanelOpen(false)
        getUsers()
      })
  }

  const resetUserData = () => {
    return {
      email: '',
      firstname: '',
      lastname: '',
      username: '',
      id: ''
    }
  }

  const updateCreateUserData = (key, value) => {
    setCreateUserData({
      ...createUserData,
      [key]: value
    })
  }

  const updateCurrentUserData = (key, value) => {
    setCurrentUserData({
      ...currentUserData,
      [key]: value
    })
  }

  const clearCreateUserData = () => {
    setCreateUserData(resetUserData())
  }

  const toggleModifyPanel = (userData) => {
    if (userData?.id === currentUserData?.id) {
      setCurrentUserData(resetUserData())
      setModifyPanelOpen(false)
    } else {
      setCurrentUserData(userData)
      setModifyPanelOpen(true)
    }
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Header />
        </div>
      </div>
      <div className="container-lg">
        <div className="row">
          <div className="col-8">
            <UsersList>
              {users.map((user) => (
                <User user={user} key={user.id}>
                  <Button
                    classnames="btn btn-transparent fw-bold"
                    onclick={() => toggleModifyPanel(user)}
                  >
                    Modify
                  </Button>
                </User>
              ))}
            </UsersList>
          </div>
          <div className="col-4">
            {!modifyPanelOpen && (
              <Form
                title="Create User"
                model={createUserData}
                onchange={updateCreateUserData}
              >
                <Button
                  classnames="btn btn-secondary me-3"
                  onclick={() => createUser(createUserData)}
                >
                  Create
                </Button>
                <Button
                  classnames="btn btn-secondary"
                  onclick={() => clearCreateUserData()}
                >
                  Clear
                </Button>
              </Form>
            )}
            {modifyPanelOpen && (
              <Form
                title="Modify Existing User"
                model={currentUserData}
                onchange={updateCurrentUserData}
              >
                <Button
                  classnames="btn btn-secondary me-3"
                  onclick={() => editUser(currentUserData)}
                >
                  Edit
                </Button>
                <Button
                  classnames="btn btn-secondary me-3"
                  onclick={() => toggleModifyPanel()}
                >
                  Reset
                </Button>
                <Button
                  classnames="btn btn-danger"
                  onclick={() => deleteUser(currentUserData)}
                >
                  Delete
                </Button>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
