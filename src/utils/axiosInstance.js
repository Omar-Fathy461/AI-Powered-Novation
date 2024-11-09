import axios from "axios";
import serverErrorHandler from './serverErrorHandler'
const baseURL = import.meta.env.VITE__GOOGLE_API_KEY;

const axiosInstance = axios.create({
    baseURL,
    headers:{
        "Content-Type": "application/json",
    }
})


axiosInstance.interceptors.response.use(function(response){
return response;
}, function(error){
    const errorMessage = serverErrorHandler(error)
    console.log(errorMessage);
    return Promise.reject(error);
});


export default axiosInstance