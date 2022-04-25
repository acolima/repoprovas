import axios from 'axios'

const BASE_URL = 'http://localhost:4000'

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } }
}

export function createUser(body) {
	return axios.post(`${BASE_URL}/sign-up`, body)
}

export function login(body) {
  return axios.post(`${BASE_URL}/login`, body)
}

export function logout(token) {
  const config = createConfig(token)
  
  return axios.post(`${BASE_URL}/logout`, {}, config)
}

export function getTestsByInstructor(token) {
  const config = createConfig(token)

  return axios.get(`${BASE_URL}/tests/instructor`, config)
}

export function getTestsByTerm(token) {
	const config = createConfig(token)

	return axios.get(`${BASE_URL}/tests/term`, config)
}