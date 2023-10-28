import axios from 'axios';
import { toast } from "react-hot-toast";

const VALIDATION_ERRORS_RESPONSE = 422;
const UNAUTHORIZED = 401;

const instance = axios.create({
  baseURL: 'https://garage-updated-api.eductor.org',
});

// Axios Response Interceptor
instance.interceptors.response.use(
  function(response) {
    const shouldShowToast = response.data.showToast === true;

    if (shouldShowToast) {
      toast.dismiss();
      toast.success(response.data.message);
    }

    return response;
  },
  function(error) {
    const STATUS_CODE = error.response.data.code;

    if (STATUS_CODE === UNAUTHORIZED) {
      toast.error(error.response.data.message, {
        id: 'unauthorized'
      });
      localStorage.clear();
      if (window.location.pathname !== '/') {
        window.location.replace("/");
      }
    } else if (STATUS_CODE === VALIDATION_ERRORS_RESPONSE) {
      const responseErrors = error.response.data.data;

      const firstErrorKey = Object.keys(responseErrors)[0];
      toast.dismiss();
      toast.error(`${responseErrors[firstErrorKey]}`);
    } else if (STATUS_CODE === 403 || STATUS_CODE === 404) {
      toast.dismiss();
      toast.error(error.response.data.message);

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
