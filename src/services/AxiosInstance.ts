import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.annapurnamatrimony.com/',
  timeout: 10000, // Timeout after 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor (e.g., for tokens)
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = sessionStorage.getItem('token'); // Example: Fetch token from sessionStorage
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add response interceptor (e.g., to handle errors)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
