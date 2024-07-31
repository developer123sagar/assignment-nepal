import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://api.assignmentnepal.com/api',
  // baseURL: "https://6pqxlhg4-5000.inc1.devtunnels.ms"
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token") || "";

    if (accessToken) {
      if (config.headers) config.headers.Authorization = accessToken;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);

export default axiosInstance;