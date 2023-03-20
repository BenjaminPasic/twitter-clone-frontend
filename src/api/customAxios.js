import axios from "axios";

const customAxios = axios.create({
  baseURL: "twitter-clone-backend-production-1af3.up.railway.app",
  withCredentials: true,
});

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("axios", error);
    if (error.response.status === 403 || error.response.status === 401) {
      return Promise.reject(error.response.data);
    }
    if (error.response.data === "Invalid token") {
      window.location.href = "/login";
    }
    console.log("Interceptor:", error);
  }
);

export default customAxios;
