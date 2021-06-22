import axios from 'axios'

const apiUtility = () => {
  const http = axios.create({
    baseURL: 'http://localhost:8005/api'
  })

  return {
    getUsers: async () => {
      try {
        const response = await http.get(`/systemusers`)
        return response
      } catch (error) {
        console.error(error)
      }
    },
    createUser: async (data) => {
      try {
        const response = await axios.post(
          `http://localhost:8005/api/systemusers`,
          {
            ...data
          }
        )
        return response
      } catch (error) {
        console.error(error)
      }
    },
    editUser: async (id, data) => {
      try {
        const response = await axios.put(
          `http://localhost:8005/api/systemusers/${id}`,
          {
            ...data
          }
        )
        return response
      } catch (error) {
        console.error(error)
      }
    },
    deleteUser: async (id) => {
      try {
        const response = await axios.delete(
          `http://localhost:8005/api/systemusers/${id}`
        )
        return response
      } catch (error) {
        console.error(error)
      }
    }
  }
}

export default apiUtility
