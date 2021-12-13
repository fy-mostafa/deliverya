import axios from 'axios';

// const AUTH_TOKEN = localStorage.getItem('token')
//   ? localStorage.getItem('token')
//   : '';

const AUTH_TOKEN =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM4NzgyNzQzLCJleHAiOjE2MzkyMTQ3NDN9.aSHUY4ihnziffB8S4yjfLGb1KnXPHmp3RlF-Nw3_MSA';

const apiClient = axios.create({
	baseURL: 'http://localhost:8080',
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		...(AUTH_TOKEN && { Authorization: `Bearer ${AUTH_TOKEN}` }),
	},
});

export default apiClient;
