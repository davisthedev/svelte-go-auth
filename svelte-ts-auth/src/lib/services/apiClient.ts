import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

import { get } from 'svelte/store';
import { authStore } from '../stores/auth';

apiClient.interceptors.request.use((config) => {
  const token = get(authStore).token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
