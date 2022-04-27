import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_BASE_URL

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } }
}

export function createUser(body) {
	return axios.post(`${BASE_URL}/sign-up`, body)
}

export function login(body) {
  return axios.post(`${BASE_URL}/login`, body)
}

export function tokenValidation(token) {
  const config = createConfig(token)
  
  return axios.post(`${BASE_URL}/token`, {}, config)
}

export function getTestsByInstructor(token) {
  const config = createConfig(token)

  return axios.get(`${BASE_URL}/tests/instructor`, config)
}

export function getTestsByTerm(token) {
	const config = createConfig(token)

	return axios.get(`${BASE_URL}/tests/term`, config)
}