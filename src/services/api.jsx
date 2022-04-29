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

export function getInstructors(token) {
  const config = createConfig(token)
  
  return axios.get(`${BASE_URL}/instructors`, config)
}

export function getInstructorTest(id, token) {
  const config = createConfig(token)
  
  return axios.get(`${BASE_URL}/tests/instructor/${id}`, config)
}

export function getCategories(token) {
  const config = createConfig(token)
  
  return axios.get(`${BASE_URL}/categories`, config)
}

export function getDisciplines(token) {
  const config = createConfig(token)
  
  return axios.get(`${BASE_URL}/disciplines`, config)
}

export function getInstructorsByDiscipline(token, disciplineId) {
  const config = createConfig(token)
  
  return axios.get(`${BASE_URL}/instructors/${disciplineId}`, config)
}

export function createTest(token, body) {
  const config = createConfig(token)

  return axios.post(`${BASE_URL}/tests/newTest`, body, config)  
}