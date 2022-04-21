import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

function createUser(email: string, password: string) {
  const body = { email, password }
	return axios.post(`${BASE_URL}/sign-up`, body)
}

export {
  createUser
}