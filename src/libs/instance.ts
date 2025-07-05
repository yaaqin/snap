import toast from 'react-hot-toast';
import axios from 'axios';
// import Router from 'next/router'

// Base URL untuk Axios
const baseURL = 'http://localhost:3000';

// Axios for private data
// export const axiosPrivate: AxiosInstance = axios.create({ baseURL })

// const router = useRouter()


// axiosPrivate.interceptors.request.use(
//   async (config) => {
//     const accessToken = await getAccessToken()
//     if (accessToken) {
//       config.headers['Authorization'] = accessToken
//     }
//     return config
//   }
// )

// axiosPrivate.interceptors.response.use(
//   (res) => res,
//   async (err) => {
//     const originalReq = err.config;

//     const status = err.response?.status;
//     const message = err.response?.data?.message || 'Terjadi kesalahan';

//     if (status === 401 && !originalReq._retry) {
//       originalReq._retry = true

//       // deleteCookie('token')

//       toast.error('Unauthorized: Sesi kamu mungkin sudah habis.')

//       // if (typeof window !== 'undefined') {
//       //   window.location.href = '/login'
//       // }

//       return Promise.reject(err)
//     } else if (status === 403) {
//       toast.error('Forbidden: Kamu tidak punya akses.');
//     } else if (status >= 500) {
//       toast.error(`Server error (${status}): ${message}`);
//     } else {
//       toast.error(`Error ${status || ''}: ${message}`);
//     }

//     return Promise.reject(err);
//   }
// );


// Axios for public data
export const axiosPublic = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
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