import axios from 'axios';
import { toast } from 'react-toastify';

const VALIDATION_ERRORS_RESPONSE = 422;
const UNAUTHORIZED = 401;

// baseURL: 'https://garage-updated-api.eductor.org',
// baseURL: 'http://garage-be.test',

const instance = axios.create({
  baseURL: 'https://api.ksbgarage.com',
});

// Axios Response Interceptor
instance.interceptors.response.use(
  function(response) {
    const shouldShowToast = response.data.showToast === true;

    if (shouldShowToast) {
      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    return response;
  },
  function(error) {
    const STATUS_CODE = error.response.data.code;

    if (STATUS_CODE === UNAUTHORIZED) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      localStorage.clear();
      if (window.location.pathname !== '/') {
        window.location.replace("/");
      }
    } else if (STATUS_CODE === VALIDATION_ERRORS_RESPONSE) {
      const responseErrors = error.response.data.data;

      const firstErrorKey = Object.keys(responseErrors)[0];
      toast.error(`${responseErrors[firstErrorKey]}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else if (STATUS_CODE === 403 || STATUS_CODE === 404) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      if (window.location.pathname !== "/dashboard") {
        // window.location.replace("/dashboard");
      }
    } else {
      toast.dismiss();
      toast.error(error.response.data.message);
    }

    return Promise.reject(error);
  }
);

export default instance;
