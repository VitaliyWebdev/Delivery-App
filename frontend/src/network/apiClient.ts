import axios from "axios";

const baseURL = "http://192.168.0.106:3000";

const axiosClient = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  function (response) {
    if (response.status === 201) {
      return response;
    }
    console.log(response, "response");
  },
  function (error) {
    let res = error.response;
    // console.log(error, "error");
    // if (res.status == 401) {
    //   window.location.href = "https://example.com/login";
    // }
    // console.error("Looks like there was a problem. Status Code: " + res.status);
    return Promise.reject(error);
  }
);

export default axiosClient;
