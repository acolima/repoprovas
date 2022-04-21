import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

// function createConfig(token: string) {
//   return { headers: { Authorization: `Bearer ${token}` } }
// }

export function createUser(body) {
	return axios.post(`${BASE_URL}/sign-up`, body)
}

export function login(body){
  return axios.post(`${BASE_URL}/login`, body)
}