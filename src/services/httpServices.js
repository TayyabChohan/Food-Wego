import axios from "axios";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");
axios.interceptors.response.use(null, (error) => {
  const expactedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expactedError) {
    console.log("Login Error Accoured", error);
    alert("An expacted Error Accoured");
  }
  return Promise.reject(error);
});
export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
