import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://mysterious-retreat-50570.herokuapp.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});


instance.interceptors.request.use(
  config => {

    config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
    return config;
  },
  error => {

    Promise.reject(error);
  }
);


instance.interceptors.response.use(function (response) {
 
  return response;
}, function (error) {
  
  if(error.response.status === 401){
    localStorage.removeItem('token');
    window.location.href = "/login";
    return;
  }
  return Promise.reject(error);
});
export default instance;