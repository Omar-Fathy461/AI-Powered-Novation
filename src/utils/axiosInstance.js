// import axios from "axios";
// import serverErrorHandler from './serverErrorHandler'
// const baseURL = import.meta.env.VITE__GOOGLE_API_KEY;

// const axiosInstance = axios.create({
//     baseURL,
//     headers:{
//         "Content-Type": "application/json",
//     }
// })



// axiosInstance.interceptors.response.use(function(response){
// return response;
// }, function(error){
//     const errorMessage = serverErrorHandler(error)
//     console.log(errorMessage);
//     return Promise.reject(error);
// });


// export default axiosInstance

import axios from "axios";
import serverErrorHandler from './serverErrorHandler';

const baseURL = import.meta.env.VITE__GOOGLE_API_KEY;

const axiosInstance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

// عدد المحاولات المسموح بها
const MAX_RETRIES = 3;

axiosInstance.interceptors.response.use(
    function (response) {
        // إذا كان الطلب ناجحًا، أعد الرد مباشرةً
        return response;
    },
    async function (error) {
        // التحقق من نوع الخطأ
        const originalRequest = error.config;
        const errorMessage = serverErrorHandler(error);

        // عرض رسالة الخطأ في الـ Console
        console.log(errorMessage);

        // التحقق إذا كان الخطأ 503 وعدد المحاولات المتبقية أكبر من صفر
        if (error.response?.status === 503 && originalRequest._retryCount < MAX_RETRIES) {
            originalRequest._retryCount = (originalRequest._retryCount || 0) + 1;

            console.log(`Retrying request... Attempt ${originalRequest._retryCount}`);

            // الانتظار قبل إعادة المحاولة (اختياري)
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // إعادة المحاولة
            return axiosInstance(originalRequest);
        }

        // إذا فشل بعد عدد المحاولات المسموح بها، قم برفض الطلب
        return Promise.reject(error);
    }
);

export default axiosInstance;
