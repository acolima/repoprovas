import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function createConfig(token) {
	return { headers: { Authorization: `Bearer ${token}` } };
}

export function createUser(body) {
	return axios.post(`${BASE_URL}/sign-up`, body);
}

export function login(body) {
	return axios.post(`${BASE_URL}/login`, body);
}

export function tokenValidation(token) {
	const config = createConfig(token);

	return axios.post(`${BASE_URL}/token`, {}, config);
}

export function getTestsByInstructor(token) {
	const config = createConfig(token);

	return axios.get(`${BASE_URL}/tests/instructors`, config);
}

export function getTestsByTerm(token) {
	const config = createConfig(token);

	return axios.get(`${BASE_URL}/tests/terms`, config);
}

export function getCategories(token) {
	const config = createConfig(token);

	return axios.get(`${BASE_URL}/categories`, config);
}

export function getDisciplines(token) {
	const config = createConfig(token);

	return axios.get(`${BASE_URL}/disciplines`, config);
}

export function getInstructorsByDiscipline(token, disciplineId) {
	const config = createConfig(token);

	return axios.get(`${BASE_URL}/instructors/${disciplineId}`, config);
}

export function createTest(token, body) {
	const config = createConfig(token);

	return axios.post(`${BASE_URL}/tests/create`, body, config);
}

export function updateViewsCount(token, id) {
	const config = createConfig(token);

	return axios.patch(`${BASE_URL}/tests/${id}/views`, {}, config);
}
