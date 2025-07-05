import toast from 'react-hot-toast';
import axios from 'axios';
const baseURL = import.meta.env.VITE_API_URL;



// Axios for public data
export const axiosPublic = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

axiosPublic.interceptors.request.use(
  (config) => {
    if (typeof window === 'undefined') {
      config.headers['x-ssr-request'] = 'true';
    }

    return config;
  },
  (error) => {
    // Tangani error sebelum request dikirim
    return Promise.reject(error);
  }
);

axiosPublic.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || 'Terjadi kesalahan';

    // Tampilkan error ke user
    toast.error(`Error ${status}: ${message}`);

    return Promise.reject(error);
  }
);